import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useReducedMotion } from "motion/react";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import { BaptismRubyDetailsSection } from "@/features/templates/baptism/ruby/components/BaptismRubyDetailsSection";
import { BaptismRubyExtrasSection } from "@/features/templates/baptism/ruby/components/BaptismRubyExtrasSection";
import { BaptismRubyFamilySection } from "@/features/templates/baptism/ruby/components/BaptismRubyFamilySection";
import { BaptismRubyFooter } from "@/features/templates/baptism/ruby/components/BaptismRubyFooter";
import { BaptismRubyGallerySection } from "@/features/templates/baptism/ruby/components/BaptismRubyGallerySection";
import { BaptismRubyHeroSection } from "@/features/templates/baptism/ruby/components/BaptismRubyHeroSection";
import { BaptismRubyIntroModal } from "@/features/templates/baptism/ruby/components/BaptismRubyIntroModal";
import { BaptismRubyLightbox } from "@/features/templates/baptism/ruby/components/BaptismRubyLightbox";
import { BaptismRubyReceptionSection } from "@/features/templates/baptism/ruby/components/BaptismRubyReceptionSection";
import { BaptismRubyRsvpSection } from "@/features/templates/baptism/ruby/components/BaptismRubyRsvpSection";
import { BaptismRubyStorySection } from "@/features/templates/baptism/ruby/components/BaptismRubyStorySection";
import { BaptismRubyTopbar } from "@/features/templates/baptism/ruby/components/BaptismRubyTopbar";
import { createCountdown, createWhatsappLink } from "@/features/templates/baptism/ruby/utils";

type BaptismRubyTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: BaptismRubyTemplateData;
};

export function BaptismRubyTemplate({ category, pkg, data }: BaptismRubyTemplateProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [countdown, setCountdown] = useState(() => createCountdown(data.hero.eventDateIso));
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [guestName, setGuestName] = useState("");
  const [dedication, setDedication] = useState("");
  const [guestCount, setGuestCount] = useState(1);

  const galleryImages = data.gallery.images.length > 0 ? data.gallery.images : [data.hero.coverImage];
  const galleryTotal = galleryImages.length;
  const centerImage = galleryImages[galleryIndex];
  const leftImage = galleryImages[(galleryIndex - 1 + galleryTotal) % galleryTotal];
  const rightImage = galleryImages[(galleryIndex + 1) % galleryTotal];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("invitado") ?? params.get("guest") ?? "";
    setGuestName(fromQuery);
  }, []);

  useEffect(() => {
    const maxGuests = Math.max(1, data.rsvp.passGuestLimit);
    setGuestCount((current) => Math.min(Math.max(1, current), maxGuests));
  }, [data.rsvp.passGuestLimit]);

  useEffect(() => {
    const locked = !isInvitationOpen || isGalleryModalOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isInvitationOpen, isGalleryModalOpen]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(createCountdown(data.hero.eventDateIso));
    }, 1000);
    return () => window.clearInterval(intervalId);
  }, [data.hero.eventDateIso]);

  useEffect(() => {
    if (!isInvitationOpen || isGalleryModalOpen || prefersReducedMotion || galleryTotal <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setGalleryIndex((current) => (current + 1) % galleryTotal);
    }, 4600);

    return () => window.clearInterval(intervalId);
  }, [isInvitationOpen, isGalleryModalOpen, prefersReducedMotion, galleryTotal]);

  useEffect(() => {
    if (!isGalleryModalOpen) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGalleryModalOpen(false);
      } else if (event.key === "ArrowLeft") {
        goToGallery(galleryIndex - 1);
      } else if (event.key === "ArrowRight") {
        goToGallery(galleryIndex + 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isGalleryModalOpen, galleryIndex, galleryTotal]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const parallaxNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-speed]"));
    if (parallaxNodes.length === 0) {
      return undefined;
    }

    let ticking = false;

    const updateParallax = () => {
      parallaxNodes.forEach((node) => {
        const speed = Number(node.dataset.parallaxSpeed ?? "0");
        const shift = Math.min(window.scrollY * speed, 80);
        node.style.transform = `scale(1.05) translateY(${shift.toFixed(2)}px)`;
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const goToGallery = (index: number) => {
    if (galleryTotal === 0) {
      return;
    }
    setGalleryIndex((index + galleryTotal) % galleryTotal);
  };

  const onTouchEnd = (endX: number) => {
    if (touchStartX === null) {
      return;
    }

    const delta = endX - touchStartX;
    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        goToGallery(galleryIndex + 1);
      } else {
        goToGallery(galleryIndex - 1);
      }
    }
    setTouchStartX(null);
  };

  const formattedRsvpMessage = useMemo(() => {
    const nameLine = guestName.trim() ? `Invitado: ${guestName.trim()}` : "";
    const countLine = `Personas: ${guestCount}`;
    const dedicationLine = dedication.trim() ? `Dedicatoria: ${dedication.trim()}` : "";
    return [data.rsvp.defaultMessage, nameLine, countLine, dedicationLine].filter(Boolean).join("\n");
  }, [data.rsvp.defaultMessage, guestName, guestCount, dedication]);

  const whatsappUrl = useMemo(
    () => createWhatsappLink(data.rsvp.whatsappPhone, formattedRsvpMessage),
    [data.rsvp.whatsappPhone, formattedRsvpMessage],
  );

  const reveal = (delay = 0, y = 22) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y, filter: "blur(10px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.85, delay, ease: [0.19, 1, 0.22, 1] as const },
        };

  const onRsvpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="template-shell relative min-h-screen max-w-full overflow-x-clip bg-[#fdfcff] text-slate-700">
      <BaptismRubyIntroModal
        data={data}
        isOpen={isInvitationOpen}
        onOpen={() => setIsInvitationOpen(true)}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(151,193,255,0.18),transparent_24%),linear-gradient(180deg,#ffffff,#f8f8fd)]" />
      </div>

      <div className="relative pb-20">
        <BaptismRubyTopbar category={category} pkg={pkg} />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <BaptismRubyHeroSection
            data={data}
            countdown={countdown}
            prefersReducedMotion={prefersReducedMotion}
            reveal={reveal}
          />

          <BaptismRubyStorySection welcome={data.welcome} reveal={reveal} />

          <BaptismRubyDetailsSection details={data.details} reveal={reveal} />

          <BaptismRubyFamilySection family={data.family} reveal={reveal} />

          <BaptismRubyReceptionSection
            reception={data.reception}
            fallbackImage={galleryImages[0]}
            reveal={reveal}
          />

          <BaptismRubyGallerySection
            gallery={data.gallery}
            leftImage={leftImage}
            centerImage={centerImage}
            rightImage={rightImage}
            onTouchStart={setTouchStartX}
            onTouchEnd={onTouchEnd}
            onPrev={() => goToGallery(galleryIndex - 1)}
            onNext={() => goToGallery(galleryIndex + 1)}
            onOpen={() => setIsGalleryModalOpen(true)}
            reveal={reveal}
          />

          <BaptismRubyExtrasSection
            dressCode={data.dressCode}
            gifts={data.gifts}
            reveal={reveal}
          />

          <BaptismRubyRsvpSection
            rsvp={data.rsvp}
            baptizedName={data.hero.babyName}
            guestName={guestName}
            dedication={dedication}
            guestCount={guestCount}
            onDedicationChange={setDedication}
            onGuestCountChange={setGuestCount}
            onSubmit={onRsvpSubmit}
            reveal={reveal}
          />

          <BaptismRubyFooter closing={data.closing} reveal={reveal} />
        </div>
      </div>

      <BaptismRubyLightbox
        isOpen={isGalleryModalOpen}
        images={galleryImages}
        activeIndex={galleryIndex}
        prefersReducedMotion={prefersReducedMotion}
        onTouchStart={setTouchStartX}
        onTouchEnd={onTouchEnd}
        onPrev={() => goToGallery(galleryIndex - 1)}
        onNext={() => goToGallery(galleryIndex + 1)}
        onClose={() => setIsGalleryModalOpen(false)}
      />
    </div>
  );
}

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { Church, Clock3, Heart, MapPin, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type { BaptismEssentialTemplateData } from "@/features/templates/baptism/templateTypes";
import { createCountdown, createWhatsappLink } from "@/features/templates/baptism/ruby/utils";

type BaptismEssentialTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: BaptismEssentialTemplateData;
};

export function BaptismEssentialTemplate({
  category,
  pkg,
  data,
}: BaptismEssentialTemplateProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [countdown, setCountdown] = useState(() => createCountdown(data.hero.eventDateIso));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(createCountdown(data.hero.eventDateIso));
    }, 1000);
    return () => window.clearInterval(intervalId);
  }, [data.hero.eventDateIso]);

  const whatsappUrl = createWhatsappLink(data.rsvp.whatsappPhone, data.rsvp.defaultMessage);

  const reveal = (delay = 0, y = 18) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y, filter: "blur(8px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, amount: 0.22 },
          transition: { duration: 0.75, delay, ease: [0.19, 1, 0.22, 1] as const },
        };

  const receptionImage = data.reception.image ?? data.hero.coverImage;

  return (
    <div className="template-shell relative min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#FFFDF9,#F3E9D2_52%,#FFFDF9)] text-[#2A2A2A]">
      <div className="sticky top-0 z-40 border-b border-[#E6D3A3]/30 bg-[#FFFDF9]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            className="text-[11px] uppercase tracking-[0.24em] text-[#2A2A2A]/75 transition hover:text-[#2A2A2A]"
            to={`/categoria/${category.slug}`}
          >
            Regresar a {category.shortName}
          </Link>
          <span className="rounded-full border border-[#E6D3A3] bg-[#FFFDF9] px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[#2A2A2A]/85">
            {category.shortName} / {pkg.name}
          </span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <motion.section
          {...reveal(0.04, 20)}
          className="overflow-hidden rounded-[2.1rem] border border-[#E6D3A3]/60 bg-[#FFFDF9] shadow-[0_24px_70px_rgba(230,211,163,0.28)]"
        >
          <div className="grid items-stretch md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[24rem]">
              <img
                src={data.hero.coverImage.src}
                alt={data.hero.coverImage.alt}
                className="h-full w-full object-cover"
                style={{ objectPosition: data.hero.coverImage.position ?? "center center" }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,23,44,0.18),rgba(11,21,40,0.52))]" />
            </div>

            <div className="bg-[linear-gradient(180deg,#FFFDF9,#DCE8F2)] p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[#2A2A2A]/72">Bautizo Esencial</p>
              <h2 className="mt-4 font-serif text-5xl text-[#2A2A2A]">{data.hero.babyName}</h2>
              <p className="mt-4 text-sm leading-7 text-[#2A2A2A]/82">{data.hero.phrase}</p>

              <Card className="mt-6 rounded-[1.4rem] border-[#E6D3A3]/55 bg-[linear-gradient(180deg,#FFFDF9,#F3E9D2)] p-4 shadow-[0_14px_34px_rgba(230,211,163,0.35)]">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#2A2A2A]/75">Cuenta regresiva</p>
                <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                  {[
                    { label: "Dias", value: countdown.days },
                    { label: "Horas", value: countdown.hours },
                    { label: "Min", value: countdown.minutes },
                    { label: "Seg", value: countdown.seconds },
                  ].map((item) => (
                    <div key={item.label}>
                      <strong className="block font-serif text-2xl text-[#2A2A2A]">{item.value}</strong>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#2A2A2A]/65">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#2A2A2A]/65">{data.hero.eventDateLabel}</p>
              </Card>
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal(0.08)} className="rounded-[1.8rem] border border-[#E6D3A3]/55 bg-[linear-gradient(180deg,#FFFDF9,#F3E9D2)] p-6 shadow-[0_16px_40px_rgba(230,211,163,0.26)]">
          <h2 className="font-serif text-3xl text-[#2A2A2A]">{data.welcome.title}</h2>
          <p className="mt-3 text-sm leading-7 text-[#2A2A2A]/82">{data.welcome.message}</p>
        </motion.section>

        <motion.section {...reveal(0.1)} className="grid gap-4 md:grid-cols-2">
          <Card className="rounded-[1.6rem] border-[#E6D3A3]/55 bg-[linear-gradient(180deg,#FFFDF9,#DCE8F2)] p-6 shadow-[0_16px_40px_rgba(220,232,242,0.5)]">
            <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#2A2A2A]/72">
              <Church className="h-4 w-4" />
              Ceremonia
            </p>
            <p className="mt-3 font-serif text-2xl text-[#2A2A2A]">{data.details.church}</p>
            <p className="mt-2 text-sm text-[#2A2A2A]/82">{data.details.date}</p>
            <p className="mt-1 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-[#2A2A2A]/72">
              <Clock3 className="h-4 w-4" />
              {data.details.time}
            </p>
            <Button
              type="button"
              onClick={() => window.open(data.details.mapsUrl, "_blank", "noopener,noreferrer")}
              className="mt-5 h-10 rounded-full border border-[#E6D3A3] bg-[#E6D3A3] px-6 text-[#2A2A2A] hover:brightness-105"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Como llegar
            </Button>
          </Card>

          <Card className="rounded-[1.6rem] border-[#E6D3A3]/55 bg-[linear-gradient(180deg,#FFFDF9,#DCE8F2)] p-6 shadow-[0_16px_40px_rgba(220,232,242,0.5)]">
            <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#2A2A2A]/72">
              <Heart className="h-4 w-4" />
              Familia
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[#2A2A2A]/62">Padres</p>
            {data.family.parents.map((name) => (
              <p key={name} className="mt-1 font-serif text-2xl text-[#2A2A2A]">
                {name}
              </p>
            ))}
            <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-[#2A2A2A]/62">Padrinos</p>
            {data.family.godparents.map((name) => (
              <p key={name} className="mt-1 font-serif text-2xl text-[#2A2A2A]">
                {name}
              </p>
            ))}
          </Card>
        </motion.section>

        <motion.section {...reveal(0.12)} className="grid gap-4 md:grid-cols-[1fr_0.95fr] md:items-center">
          <figure className="overflow-hidden rounded-[1.8rem]">
            <img
              src={receptionImage.src}
              alt={receptionImage.alt}
              className="h-[52svh] w-full object-cover shadow-[0_24px_60px_rgba(22,42,74,0.16)] sm:h-[60svh]"
              style={{ objectPosition: receptionImage.position ?? "center center" }}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <Card className="rounded-[1.8rem] border-[#E6D3A3]/55 bg-[linear-gradient(180deg,#FFFDF9,#DCE8F2)] p-6 shadow-[0_16px_40px_rgba(220,232,242,0.5)]">
            <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#2A2A2A]/72">
              <Users className="h-4 w-4" />
              Recepcion
            </p>
            <p className="mt-3 font-serif text-3xl text-[#2A2A2A]">{data.reception.venue}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#2A2A2A]/72">{data.reception.time}</p>
            <p className="mt-3 text-sm leading-7 text-[#2A2A2A]/82">{data.reception.note}</p>
            <Button
              type="button"
              onClick={() => window.open(data.reception.mapsUrl, "_blank", "noopener,noreferrer")}
              className="mt-5 h-10 rounded-full border border-[#E6D3A3] bg-[#E6D3A3] px-6 text-[#2A2A2A] hover:brightness-105"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Como llegar
            </Button>
          </Card>
        </motion.section>

        <motion.section {...reveal(0.14)} className="rounded-[1.8rem] border border-[#E6D3A3]/55 bg-[linear-gradient(180deg,#FFFDF9,#F3E9D2)] p-6 shadow-[0_14px_40px_rgba(230,211,163,0.28)]">
          <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#2A2A2A]/72">
            <MessageCircle className="h-4 w-4" />
            RSVP
          </p>
          <h3 className="mt-3 font-serif text-3xl text-[#2A2A2A]">{data.rsvp.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#2A2A2A]/82">{data.rsvp.note}</p>
          <Button
            type="button"
            onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
            className="mt-5 h-11 rounded-full border border-[#E6D3A3] bg-[#E6D3A3] px-7 text-[#2A2A2A] hover:brightness-105"
          >
            Confirmar por WhatsApp
          </Button>
        </motion.section>

        <motion.footer {...reveal(0.16)} className="pb-8 text-center">
          <p className="font-serif text-4xl text-[#2A2A2A]">{data.closing.phrase}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#2A2A2A]/62">{data.closing.signature}</p>
        </motion.footer>
      </div>
    </div>
  );
}

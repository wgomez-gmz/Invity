import { motion } from "motion/react";
import weddingHero from "@/assets/boda/Gold/image 2.png";
import weddingGallery from "@/assets/boda/Silver/image 3.png";
import xvGallery from "@/assets/xv/Gold/foto3.png";
import birthdayGallery from "@/assets/xv/Gold/galeria4.png";
import babyGallery from "@/assets/xv/Ruby/Galeria/fondo.png";
import weddingIcon from "@/assets/boda/rubi/image.png";
import xvIcon from "@/assets/xv/Gold/foto2.png";
import baptismIcon from "@/assets/xv/Gold/iglesia1.png";
import eventIcon from "@/assets/boda/Gold/contador.png";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryCard } from "@/components/home/CategoryCard";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { Gallery } from "@/components/home/Gallery";
import { StepsSection } from "@/components/home/StepsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { HomeFooter } from "@/components/home/HomeFooter";

const categories = [
  {
    title: "Bodas",
    subtitle: "Diseños románticos y sofisticados para anunciar un gran sí con estilo.",
    image: weddingIcon,
    emoji: "💍",
  },
  {
    title: "Cumpleaños",
    subtitle: "Invitaciones llenas de personalidad para celebrar de forma divertida y elegante.",
    image: birthdayGallery,
    emoji: "🎉",
  },
  {
    title: "Bautizos",
    subtitle: "Propuestas delicadas y memorables para compartir momentos llenos de significado.",
    image: baptismIcon,
    emoji: "✨",
  },
  {
    title: "Eventos",
    subtitle: "Formatos modernos y versátiles para celebraciones especiales con identidad propia.",
    image: eventIcon,
    emoji: "🎈",
  },
];

const galleryItems = [
  {
    image: weddingHero,
    title: "Boda editorial",
    heightClass: "h-[24rem]",
  },
  {
    image: xvGallery,
    title: "XV elegante",
    heightClass: "h-[18rem]",
  },
  {
    image: weddingGallery,
    title: "Invitación romántica",
    heightClass: "h-[26rem]",
  },
  {
    image: babyGallery,
    title: "Baby shower premium",
    heightClass: "h-[17rem]",
  },
  {
    image: xvIcon,
    title: "Cumpleaños chic",
    heightClass: "h-[21rem]",
  },
];

export function HomePage() {
  return (
    <div className="space-y-8 pb-6">
      <HeroSection mockupImage={weddingHero} />

      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
            Categorías
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#1A2A44] md:text-4xl">
            Colecciones para cada tipo de celebración
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Desde bodas elegantes hasta eventos llenos de color, cada categoría está pensada para
            transmitir emoción, estilo y una sensación premium.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <BenefitsSection />
      <Gallery items={galleryItems} />
      <StepsSection />
      <Testimonials />
      <CTASection />
      <HomeFooter />
    </div>
  );
}

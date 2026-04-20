import { motion } from "motion/react";
import { BadgeCheck, Clock3, Send, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type BenefitsSectionProps = {
  title: string;
  description: string;
};

const benefits = [
  {
    title: "Diseno exclusivo",
    description: "Cada propuesta cuida composicion, atmosfera y detalles para verse premium.",
    Icon: Sparkles,
  },
  {
    title: "Entrega agil",
    description: "Procesos claros y tiempos pensados para que avances sin complicaciones.",
    Icon: Clock3,
  },
  {
    title: "Compatible con WhatsApp",
    description: "Comparte tu invitacion de inmediato con una experiencia impecable en movil.",
    Icon: Send,
  },
  {
    title: "Interaccion con valor",
    description: "Cuenta regresiva, musica, mapa y RSVP para elevar la experiencia del invitado.",
    Icon: BadgeCheck,
  },
];

export function BenefitsSection({
  title,
  description,
}: BenefitsSectionProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="rounded-[2rem] border border-white/70 bg-[linear-gradient(165deg,rgba(255,255,255,0.94),rgba(245,249,248,0.96))] p-8 shadow-lg shadow-slate-950/5"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
          Diferenciacion
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-[#1A2A44] md:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
          {description}
        </p>

        <div className="mt-8 rounded-[1.75rem] border border-[#D4AF37]/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.10),rgba(255,255,255,0.9))] p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b88918]">
            Mira como se vera tu invitacion
          </p>
          <p className="mt-3 font-serif text-2xl text-[#1A2A44]">
            Una experiencia digital que emociona desde el primer toque.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            No es solo una invitacion. Es la primera impresion de tu evento, presentada con
            movimiento, elegancia y una presencia que justifica cada detalle.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {benefits.map(({ title: benefitTitle, description: benefitDescription, Icon }, index) => (
          <motion.div
            key={benefitTitle}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          >
            <Card className="h-full rounded-[2rem] border-white/70 bg-white/90">
              <CardContent className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F7A7A]/10 text-[#1F7A7A]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[#1A2A44]">{benefitTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefitDescription}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

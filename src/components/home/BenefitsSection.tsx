import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Wand2, Palette, Crown, MessageSquareShare } from "lucide-react";

const benefits = [
  {
    icon: Wand2,
    title: "Entrega inmediata",
    description: "Recibe tu invitación digital lista para compartirse con una presencia impecable.",
  },
  {
    icon: Palette,
    title: "Personalización fácil",
    description: "Ajusta textos, colores y detalles del evento para reflejar tu estilo con elegancia.",
  },
  {
    icon: Crown,
    title: "Diseños premium",
    description: "Composiciones modernas, animadas y refinadas para celebraciones memorables.",
  },
  {
    icon: MessageSquareShare,
    title: "Compartir por WhatsApp",
    description: "Comparte tu invitación en segundos con una experiencia optimizada para móvil.",
  },
];

export function BenefitsSection() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
          Beneficios
        </p>
        <h2 className="mt-3 font-serif text-3xl text-[#1A2A44] md:text-4xl">
          Todo lo que necesitas para anunciar tu evento con estilo y confianza
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
            >
              <Card className="h-full rounded-2xl border-white/70 bg-white/85 shadow-lg shadow-slate-950/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F7A7A]/10 text-[#1F7A7A]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A2A44]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

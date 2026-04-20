import { motion } from "motion/react";
import { CheckCircle2, Sparkles, Send } from "lucide-react";

const steps = [
  {
    icon: Sparkles,
    title: "Elige diseño",
    description: "Explora colecciones para bodas, cumpleaños, bautizos y eventos especiales.",
  },
  {
    icon: CheckCircle2,
    title: "Personaliza",
    description: "Ajusta detalles del evento, textos y estilo para que todo se sienta tuyo.",
  },
  {
    icon: Send,
    title: "Comparte",
    description: "Enviala por WhatsApp y sorprende a tus invitados con una experiencia memorable.",
  },
];

export function StepsSection() {
  return (
    <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-xl shadow-slate-950/5 md:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
          Como funciona
        </p>
        <h2 className="mt-3 font-serif text-3xl text-[#1A2A44] md:text-4xl">
          Una experiencia simple para crear invitaciones con acabado premium
        </h2>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="relative"
            >
              {index < steps.length - 1 ? (
                <div className="absolute left-6 top-6 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-[#D4AF37]/70 to-[#1F7A7A]/10 lg:block" />
              ) : null}
              <div className="relative rounded-2xl bg-[#F7F7F7] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A2A44] text-white shadow-lg shadow-[#1A2A44]/15">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Paso {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#1A2A44]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

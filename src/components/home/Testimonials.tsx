import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Daniela R.",
    role: "Boda civil",
    comment:
      "La invitación se sintió elegante desde el primer vistazo. Nuestros invitados quedaron fascinados con el diseño y la animación.",
  },
  {
    name: "Mariana G.",
    role: "XV años",
    comment:
      "Buscaba algo moderno, fino y diferente. Invity logró exactamente esa mezcla entre celebración, estilo y facilidad para compartir.",
  },
  {
    name: "Sofia y Arturo",
    role: "Evento especial",
    comment:
      "La experiencia se siente premium y muy cuidada. Es una forma preciosa de presentar un evento importante.",
  },
];

export function Testimonials() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
          Testimonios
        </p>
        <h2 className="mt-3 font-serif text-3xl text-[#1A2A44] md:text-4xl">
          Lo que se siente cuando una invitación está hecha con detalle
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
          >
            <Card className="h-full rounded-2xl border-white/70 bg-white/90 shadow-xl shadow-slate-950/5">
              <CardContent className="p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="text-sm leading-7 text-slate-600">{testimonial.comment}</p>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="font-semibold text-[#1A2A44]">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

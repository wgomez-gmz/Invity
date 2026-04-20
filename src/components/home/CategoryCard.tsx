import { motion } from "motion/react";
import { Card } from "@/components/ui/card";

type CategoryCardProps = {
  title: string;
  subtitle: string;
  image: string;
  emoji: string;
};

export function CategoryCard({ title, subtitle, image, emoji }: CategoryCardProps) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      <Card className="group relative min-h-[18rem] overflow-hidden rounded-2xl border-0 shadow-xl shadow-slate-950/10">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A44]/85 via-[#1A2A44]/35 to-transparent transition-colors duration-300 group-hover:from-[#1A2A44]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_26%)] opacity-90" />
        <div className="relative flex h-full flex-col justify-end p-6 text-white">
          <span className="mb-3 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="mr-2 text-base">{emoji}</span>
            Celebraciones Invity
          </span>
          <h3 className="font-serif text-3xl">{title}</h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">{subtitle}</p>
        </div>
      </Card>
    </motion.div>
  );
}

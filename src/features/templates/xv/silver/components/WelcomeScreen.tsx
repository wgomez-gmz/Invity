import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type WelcomeScreenProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  onOpen: () => void;
};

export function WelcomeScreen({ title, subtitle, buttonLabel, onOpen }: WelcomeScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-[rgba(245,241,234,0.92)] px-5 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <motion.div
        className="w-full max-w-xl rounded-xl border border-[var(--xv-border)] bg-white/95 p-8 text-center shadow-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-[var(--xv-blush-soft)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--xv-accent-primary)]">
          <Sparkles className="h-3.5 w-3.5" />
          Invitacion Silver
        </span>
        <h1 className="mt-5 font-['Baskervville'] text-4xl text-[var(--xv-black)]">{title}</h1>
        <p className="mt-4 text-sm leading-7 text-[var(--xv-ink)]/80">{subtitle}</p>
        <Button
          onClick={onOpen}
          className="mt-7 h-11 rounded-xl bg-[var(--xv-blush)] px-8 text-[var(--xv-black)] hover:bg-[var(--xv-accent-primary)] hover:text-white"
        >
          {buttonLabel}
        </Button>
      </motion.div>
    </motion.div>
  );
}

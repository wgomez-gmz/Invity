import { motion } from "motion/react";
import { Pause, Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type MusicButtonProps = {
  label: string;
  enabled: boolean;
  onToggle: () => void;
};

export function MusicButton({ label, enabled, onToggle }: MusicButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Button
        type="button"
        onClick={onToggle}
        className="h-12 rounded-full border border-white/12 bg-[#142238]/88 px-5 text-white shadow-[0_18px_40px_rgba(10,18,30,0.28)] backdrop-blur-md hover:bg-[#142238]"
      >
        <Volume2 className="h-4 w-4 text-[var(--xv-gold)]" />
        {label}
        {enabled ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
    </motion.div>
  );
}

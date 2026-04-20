import { motion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type MusicControlProps = {
  enabled: boolean;
  onToggle: () => void;
};

export function MusicControl({ enabled, onToggle }: MusicControlProps) {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-30"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Button
        type="button"
        onClick={onToggle}
        variant="outline"
        className="h-11 rounded-xl border-[var(--xv-border)] bg-white/95 px-4 text-[var(--xv-black)] shadow-md backdrop-blur-sm hover:bg-[var(--xv-blush-soft)]"
      >
        {enabled ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        {enabled ? "Pausar musica" : "Reproducir musica"}
      </Button>
    </motion.div>
  );
}

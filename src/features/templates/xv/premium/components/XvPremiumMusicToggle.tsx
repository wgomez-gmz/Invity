import { Disc3, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type XvPremiumMusicToggleProps = {
  label: string;
  isEnabled: boolean;
  onToggle: () => void;
};

export function XvPremiumMusicToggle({
  label,
  isEnabled,
  onToggle,
}: XvPremiumMusicToggleProps) {
  return (
    <Button
      type="button"
      size="sm"
      variant="secondary"
      onClick={onToggle}
      className="fixed bottom-5 right-5 z-[130] h-auto rounded-full border border-white/15 bg-[#1d0d17]/85 px-3 py-3 text-white shadow-[0_20px_45px_rgba(6,2,5,0.34)] backdrop-blur-xl hover:bg-[#26111d]"
      aria-label={isEnabled ? "Pausar musica" : "Reproducir musica"}
    >
      <span className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/10">
          {isEnabled ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </span>
        <span className="text-left">
          <span className="block text-[10px] uppercase tracking-[0.28em] text-white/50">
            Audio
          </span>
          <span className="flex items-center gap-2 text-sm font-medium text-white">
            <Disc3 className={`h-4 w-4 ${isEnabled ? "animate-spin" : ""}`} />
            {label}
          </span>
        </span>
      </span>
    </Button>
  );
}

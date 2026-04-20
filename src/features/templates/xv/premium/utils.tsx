import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Church, Clock3, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { XvEventCard } from "@/features/templates/xv/templateTypes";

export type CountdownParts = {
  days: string;
  hours: string;
  minutes: string;
};

export type XvReveal = Record<string, unknown>;

export function createCountdown(targetIso: string): CountdownParts {
  const now = Date.now();
  const target = new Date(targetIso).getTime();
  const diff = Math.max(target - now, 0);
  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
}

export function useAmbientLoop(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const AudioContextCtor =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextCtor) {
      return undefined;
    }

    const context = new AudioContextCtor();
    let loopTimer = 0;
    let cancelled = false;

    const playTone = (
      frequency: number,
      offset: number,
      duration: number,
      gainValue: number,
    ) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, context.currentTime + offset);
      gain.gain.exponentialRampToValueAtTime(gainValue, context.currentTime + offset + 0.18);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + offset + duration,
      );

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(context.currentTime + offset);
      oscillator.stop(context.currentTime + offset + duration + 0.05);
    };

    const scheduleLoop = () => {
      if (cancelled) {
        return;
      }

      playTone(392, 0, 1.7, 0.018);
      playTone(523.25, 1.3, 1.4, 0.014);
      playTone(587.33, 2.3, 1.2, 0.012);
      loopTimer = window.setTimeout(scheduleLoop, 3800);
    };

    void context.resume().then(() => {
      scheduleLoop();
    });

    return () => {
      cancelled = true;
      window.clearTimeout(loopTimer);
      void context.close();
    };
  }, [enabled]);
}

export function EventIcon({ type }: { type: XvEventCard["icon"] }) {
  const iconClassName = "h-5 w-5 text-[var(--xv-accent-primary)]";

  if (type === "church") {
    return <Church className={iconClassName} aria-hidden="true" />;
  }

  if (type === "party") {
    return <PartyPopper className={iconClassName} aria-hidden="true" />;
  }

  return <Clock3 className={iconClassName} aria-hidden="true" />;
}

export function AnimatedNumber({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay }}
    >
      <Card className="rounded-[2rem] border-[rgba(212,95,154,0.16)] bg-[linear-gradient(180deg,rgba(255,252,253,0.96),rgba(252,241,247,0.9))] px-5 py-6 text-center text-[var(--xv-ink)] shadow-[0_24px_60px_rgba(108,40,85,0.12)]">
        <div className="mb-2 overflow-hidden text-[2.4rem] font-semibold leading-none tracking-[-0.04em] text-[var(--xv-accent-primary,#9d248d)] sm:text-[3rem]">
          <AnimatePresence mode="wait">
            <motion.span
              key={value}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              className="block"
            >
              {value}
            </motion.span>
          </AnimatePresence>
        </div>
        <strong className="text-xs uppercase tracking-[0.34em] text-[rgba(76,45,70,0.72)]">{label}</strong>
      </Card>
    </motion.div>
  );
}

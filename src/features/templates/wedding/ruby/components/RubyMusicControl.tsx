import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Pause, Play } from "lucide-react";

export function RubyMusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((oscillator) => oscillator.stop());
      audioContextRef.current?.close();
    };
  }, []);

  const startAmbient = async () => {
    const audioContext = new window.AudioContext();
    const gain = audioContext.createGain();
    gain.gain.value = 0.012;
    gain.connect(audioContext.destination);

    const frequencies = [196, 246.94, 293.66];
    const oscillators = frequencies.map((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const oscillatorGain = audioContext.createGain();
      oscillator.type = index === 1 ? "triangle" : "sine";
      oscillator.frequency.value = frequency;
      oscillatorGain.gain.value = index === 1 ? 0.24 : 0.16;
      oscillator.connect(oscillatorGain);
      oscillatorGain.connect(gain);
      oscillator.start();
      return oscillator;
    });

    audioContextRef.current = audioContext;
    gainRef.current = gain;
    oscillatorsRef.current = oscillators;
  };

  const stopAmbient = async () => {
    oscillatorsRef.current.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch {}
    });
    oscillatorsRef.current = [];
    gainRef.current = null;
    if (audioContextRef.current) {
      await audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const handleToggle = async () => {
    if (isPlaying) {
      await stopAmbient();
      setIsPlaying(false);
      return;
    }

    await startAmbient();
    setIsPlaying(true);
  };

  return (
    <motion.button
      type="button"
      onClick={() => void handleToggle()}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[rgba(190,172,133,0.18)] bg-[rgba(49,11,24,0.94)] px-4 py-3 text-[rgba(250,246,240,0.98)] shadow-[0_24px_48px_rgba(20,7,12,0.26)] backdrop-blur"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(190,172,133,0.96)]">
        {isPlaying ? "Pausar musica" : "Activar musica"}
      </span>
    </motion.button>
  );
}

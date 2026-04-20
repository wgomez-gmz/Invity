import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyCountdownSectionProps = {
  data: WeddingTemplateData;
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyCountdownSection({
  data,
  textReveal,
}: RubyCountdownSectionProps) {
  const getItems = () => {
    if (!data.countdown.targetDateISO) {
      return data.countdown.items;
    }

    const target = new Date(data.countdown.targetDateISO).getTime();
    const now = Date.now();
    const distance = Math.max(target - now, 0);

    return [
      { label: "Dias", value: String(Math.floor(distance / (1000 * 60 * 60 * 24))) },
      { label: "Horas", value: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0") },
      { label: "Minutos", value: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0") },
      { label: "Segundos", value: String(Math.floor((distance / 1000) % 60)).padStart(2, "0") },
    ];
  };

  const [items, setItems] = useState(getItems);

  useEffect(() => {
    if (!data.countdown.targetDateISO) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setItems(getItems());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [data.countdown.targetDateISO]);

  return (
    <section className="countdown-section scroll-reveal reveal-rise-strong">
      <div className="countdown-background">
        <img src={data.countdown.background} alt="" />
        <div className="countdown-overlay" aria-hidden="true" />
      </div>

      <div className="countdown-content">
        <motion.span className="countdown-kicker" {...textReveal(0.1, 16)}>
          {data.countdown.kicker}
        </motion.span>
        <div className="countdown-grid">
          {items.map((item) => (
            <article key={item.label} className="countdown-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

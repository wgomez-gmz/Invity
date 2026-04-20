import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

type RubyOverlayDialogProps = {
  open: boolean;
  title: string;
  eyebrow?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function RubyOverlayDialog({
  open,
  title,
  eyebrow,
  onClose,
  children,
}: RubyOverlayDialogProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <button
            type="button"
            aria-label="Cerrar dialogo"
            onClick={onClose}
            className="absolute inset-0 bg-[rgba(20,7,12,0.72)] backdrop-blur-[2px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.985 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-[rgba(190,172,133,0.18)] bg-[rgba(255,251,245,0.98)] p-6 shadow-[0_32px_80px_rgba(20,7,12,0.26)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                {eyebrow ? (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgba(122,132,101,0.94)]">
                    {eyebrow}
                  </p>
                ) : null}
                <h3 className="mt-2 font-serif text-3xl text-[rgba(64,66,58,0.94)]">{title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(190,172,133,0.18)] bg-white text-[rgb(49,11,24)] transition-transform hover:scale-[1.02]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

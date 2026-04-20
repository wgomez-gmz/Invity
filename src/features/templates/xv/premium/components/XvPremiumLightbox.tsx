import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvMediaImage } from "@/features/templates/xv/templateTypes";

type XvPremiumLightboxProps = {
  image: XvMediaImage | null;
  prefersReducedMotion: boolean;
  onClose: () => void;
};

export function XvPremiumLightbox({
  image,
  prefersReducedMotion,
  onClose,
}: XvPremiumLightboxProps) {
  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="fixed inset-0 z-[160] flex items-center justify-center bg-[#140810]/80 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-4xl"
          >
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-[#1b0c16]/90 p-2 shadow-[0_30px_90px_rgba(4,1,3,0.5)]">
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <img src={image.src} alt={image.alt} className="max-h-[78vh] w-full object-cover" />
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={onClose}
                  className="absolute right-4 top-4 border border-white/15 bg-black/40 text-white backdrop-blur-md hover:bg-black/60"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

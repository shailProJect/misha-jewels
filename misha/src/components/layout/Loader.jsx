import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
        >
          <motion.svg
            width="56"
            height="56"
            viewBox="0 0 100 100"
            initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{
              rotate: { duration: 2.4, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.8 },
            }}
          >
            <polygon
              points="50,5 90,35 74,95 26,95 10,35"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <polygon points="50,5 90,35 10,35" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
            <line x1="26" y1="95" x2="50" y2="35" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />
            <line x1="74" y1="95" x2="50" y2="35" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />
          </motion.svg>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 font-display text-sm tracking-[0.4em] text-white/70 uppercase"
          >
            Misha Jewels
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

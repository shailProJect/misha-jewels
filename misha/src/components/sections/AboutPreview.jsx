import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="section-pad relative">
      <div className="container-lux grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] rounded-sm overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #14120a 0%, #1e1a0e 35%, #0f1115 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="55%" height="55%" viewBox="0 0 100 100" className="opacity-70">
              <polygon points="50,8 88,35 72,92 28,92 12,35" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
              <polygon points="50,8 88,35 12,35" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6" />
              <line x1="28" y1="92" x2="50" y2="35" stroke="#D4AF37" strokeWidth="0.4" opacity="0.5" />
              <line x1="72" y1="92" x2="50" y2="35" stroke="#D4AF37" strokeWidth="0.4" opacity="0.5" />
              <line x1="12" y1="35" x2="88" y2="35" stroke="#D4AF37" strokeWidth="0.3" opacity="0.3" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-6 right-6 glass rounded-sm p-5 flex items-center justify-between">
            <div>
              <p className="font-display text-2xl text-white">2023</p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1">Established</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="font-display text-2xl text-white">Surat SEZ</p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1">Manufacturing</p>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            The House
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-medium max-w-lg"
          >
            An Art Perfected Since 2023
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/55 mt-6 leading-relaxed max-w-lg"
          >
            Misha Jewels Private Limited was founded in Ahmedabad by Mr. Nirav Soni, a visionary
            entrepreneur whose journey began on the trading floors of Surat. Today, our core team of
            designers, craftsmen and gemmologists manufacture and export gold, silver and
            diamond-studded jewellery from our recognised facility within Surat SEZ.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link to="/about" className="btn-outline mt-9 inline-flex">
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

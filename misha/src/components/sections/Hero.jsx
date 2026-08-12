import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowDown } from "react-icons/hi";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(212,175,55,0.14), transparent 65%), linear-gradient(180deg, #050505 0%, #050505 70%, #0f1115 100%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-lux relative z-10 text-center flex flex-col items-center"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          Manufacturers &amp; Exporters — Since 2023
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.6rem] leading-[1.03] max-w-5xl"
        >
          Crafting Timeless <span className="gold-gradient-text italic">Brilliance</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-white/60 text-base md:text-lg max-w-xl leading-relaxed"
        >
          Manufacturers &amp; exporters of premium diamond, gold and silver jewellery — handcrafted
          in Surat SEZ, Gujarat.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-11 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/manufacturing" className="btn-gold">
            Explore Manufacturing
          </Link>
          <Link to="/about" className="btn-outline">
            About Company
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <HiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}

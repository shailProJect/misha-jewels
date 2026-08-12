import { motion } from "framer-motion";
import Breadcrumb from "../ui/Breadcrumb";

export default function PageHero({ eyebrow, title, desc, trail }) {
  return (
    <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,175,55,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="container-lux relative">
        <Breadcrumb trail={trail} />
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="eyebrow mt-8 mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-[4.2rem] leading-[1.05] max-w-3xl"
        >
          {title}
        </motion.h1>
        {desc && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/55 text-lg mt-6 max-w-xl leading-relaxed"
          >
            {desc}
          </motion.p>
        )}
      </div>
    </section>
  );
}

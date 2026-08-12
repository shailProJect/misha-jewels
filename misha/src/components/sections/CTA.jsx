import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,175,55,0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="container-lux relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
        >
          Let's Build <span className="gold-gradient-text italic">Brilliance</span> Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-white/55 mt-6 max-w-xl mx-auto"
        >
          From bespoke design to global export — partner with Misha Jewels for your next collection.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/contact" className="btn-gold mt-10 inline-flex">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

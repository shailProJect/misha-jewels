import { motion } from "framer-motion";

export default function GlassCard({ children, index = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`glass rounded-sm p-8 relative group transition-shadow duration-500 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.25)] hover:border-gold/30 ${className}`}
    >
      {children}
    </motion.div>
  );
}

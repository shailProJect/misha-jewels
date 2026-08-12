import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Breadcrumb({ trail }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-white/40"
    >
      <Link to="/" className="hover:text-gold transition-colors">
        Home
      </Link>
      {trail.map((t, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-white/20">/</span>
          {t.to ? (
            <Link to={t.to} className="hover:text-gold transition-colors">
              {t.label}
            </Link>
          ) : (
            <span className="text-gold">{t.label}</span>
          )}
        </span>
      ))}
    </motion.div>
  );
}

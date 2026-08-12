import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DIAMOND_TYPES } from "../../data/company";

function Diamond({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`absolute ${className} animate-float`}
      style={{ animationDelay: `${delay}s` }}
      width="70"
      height="70"
    >
      <polygon points="50,10 85,38 68,90 32,90 15,38" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
      <polygon points="50,10 85,38 15,38" fill="none" stroke="#D4AF37" strokeWidth="0.6" opacity="0.35" />
    </motion.svg>
  );
}

export default function DiamondsSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#0f1115]">
      <Diamond className="top-10 left-[6%] hidden md:block" delay={0} />
      <Diamond className="bottom-16 right-[8%] hidden md:block" delay={1.2} />
      <Diamond className="top-1/2 left-[45%] hidden lg:block opacity-60" delay={2} />

      <div className="container-lux relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4">The Stone</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-medium">
            Diamonds, Selected With <span className="text-gold italic font-display">Precision</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mt-16 rounded-sm overflow-hidden">
          {DIAMOND_TYPES.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f1115] p-8 hover:bg-white/[0.03] transition-colors"
            >
              <h3 className="font-display text-lg text-white mb-3">{d.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/diamonds" className="btn-gold">
            Explore Diamonds
          </Link>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MANUFACTURING_PROCESS } from "../../data/company";
import SectionHeading from "../ui/SectionHeading";

export default function ManufacturingExcellence() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow="Manufacturing Excellence" title="From Concept to Export, Every Stage Refined" />
          <Link to="/manufacturing" className="btn-outline whitespace-nowrap">
            View Full Process
          </Link>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-[22px] left-0 right-0 h-px bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-[#a9812c] via-[#f1d982] to-[#a9812c]"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-4">
            {MANUFACTURING_PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative"
              >
                <div className="w-11 h-11 rounded-full glass flex items-center justify-center text-gold font-display text-sm mb-4 relative z-10">
                  {step.step}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                <p className="text-white/45 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

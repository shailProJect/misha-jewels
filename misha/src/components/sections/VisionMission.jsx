import { motion } from "framer-motion";
import { VISION, MISSION } from "../../data/company";

export default function VisionMission() {
  return (
    <section className="section-pad relative">
      <div className="container-lux grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-sm p-10 md:p-14"
        >
          <p className="eyebrow mb-5">Our Vision</p>
          <p className="font-display text-2xl md:text-[1.9rem] leading-snug text-white italic">
            “{VISION}”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass rounded-sm p-10 md:p-14"
        >
          <p className="eyebrow mb-5">Our Mission</p>
          <ul className="space-y-4">
            {MISSION.map((m, i) => (
              <li key={i} className="flex gap-4 text-white/70 text-sm leading-relaxed">
                <span className="text-gold font-display text-lg leading-none mt-0.5">0{i + 1}</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

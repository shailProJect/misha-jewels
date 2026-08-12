import { motion } from "framer-motion";
import useSEO from "../hooks/useSEO";
import PageHero from "../components/layout/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import CTA from "../components/sections/CTA";
import { DIAMOND_TYPES } from "../data/company";

const QUALITY_STEPS = [
  { title: "Sourcing", desc: "Diamonds are sourced exclusively from reliable, recognised suppliers." },
  { title: "Gemmological Review", desc: "Our in-house team verifies cut, clarity, colour and carat." },
  { title: "Selection", desc: "Only stones meeting our benchmark standard proceed to setting." },
  { title: "Certification", desc: "Documentation accompanies stones through manufacture and export." },
];

export default function Diamonds() {
  useSEO(
    "Diamonds",
    "Natural diamonds, lab-grown diamonds and precious stones — sourced, verified and set by the gemmology team at Misha Jewels."
  );

  return (
    <>
      <PageHero
        eyebrow="Diamonds"
        title="Selected for Fire, Set with Precision"
        desc="An in-house team of gemmologists governs every stone that enters our facility — from sourcing to certification."
        trail={[{ label: "Diamonds" }]}
      />

      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="Our Stones" title="Natural, Lab-Grown & Precious" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
            {DIAMOND_TYPES.map((d, i) => (
              <GlassCard key={d.title} index={i} className="p-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display text-2xl text-white">{d.title}</h3>
                  <svg width="34" height="34" viewBox="0 0 34 34" className="text-gold shrink-0">
                    <polygon points="17,2 30,12 24,32 10,32 4,12" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{d.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quality standards timeline */}
      <section className="section-pad bg-[#0f1115] border-y hairline">
        <div className="container-lux">
          <SectionHeading eyebrow="Quality Standards" title="Every Stone, Verified" align="center" />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
                className="h-full bg-gradient-to-r from-[#a9812c] via-[#f1d982] to-[#a9812c]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {QUALITY_STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 text-gold font-display">
                    {i + 1}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{s.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

import { motion } from "framer-motion";
import useSEO from "../hooks/useSEO";
import PageHero from "../components/layout/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import Counter from "../components/ui/Counter";
import CTA from "../components/sections/CTA";
import { STORY_PARAGRAPHS, CHAIRMAN_MESSAGE, VISION, MISSION, VALUES, TIMELINE, STATS } from "../data/company";

export default function About() {
  useSEO(
    "About Us",
    "Learn the story of Misha Jewels Private Limited — founded in 2023, manufacturing gold, silver and diamond jewellery from Surat SEZ, Gujarat."
  );

  return (
    <>
      <PageHero
        eyebrow="About Misha Jewels"
        title="An Art Perfected in Silence"
        desc="Manufacturers and exporters of fine jewellery, built on craftsmanship, transparency and an uncompromising standard of quality."
        trail={[{ label: "About" }]}
      />

      {/* Company story */}
      <section className="section-pad">
        <div className="container-lux grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div className="lg:sticky lg:top-32 h-fit">
            <SectionHeading eyebrow="Our Story" title="Two Decades of Trust in the Making" />
          </div>
          <div className="space-y-6">
            {STORY_PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="text-white/60 leading-relaxed text-[0.98rem]"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman message */}
      <section className="section-pad bg-[#0f1115] border-y hairline">
        <div className="container-lux">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="eyebrow mb-6">Chairman's Message</p>
            <p className="font-display text-2xl md:text-3xl leading-snug text-white/90 italic">
              “{CHAIRMAN_MESSAGE.message}”
            </p>
            <div className="mt-8">
              <p className="text-white font-semibold">{CHAIRMAN_MESSAGE.name}</p>
              <p className="text-gold text-sm">{CHAIRMAN_MESSAGE.title}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="What Drives Us" title="Vision, Mission & Values" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <GlassCard index={0}>
              <p className="eyebrow mb-4">Vision</p>
              <p className="font-display text-xl text-white italic leading-snug">“{VISION}”</p>
            </GlassCard>
            <GlassCard index={1}>
              <p className="eyebrow mb-4">Mission</p>
              <ul className="space-y-3">
                {MISSION.map((m, i) => (
                  <li key={i} className="text-white/60 text-sm leading-relaxed flex gap-3">
                    <span className="text-gold">—</span>
                    {m}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {VALUES.map((v, i) => (
              <GlassCard key={v.title} index={i}>
                <h3 className="font-display text-lg text-white mb-3">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-[#0f1115] border-y hairline">
        <div className="container-lux">
          <SectionHeading eyebrow="Journey" title="Milestones on the Path to Brilliance" align="center" />

          <div className="mt-16 relative max-w-3xl mx-auto">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full glass flex items-center justify-center md:-translate-x-1/2 z-10">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                    <p className="font-display text-2xl text-gold">{t.year}</p>
                    <h4 className="text-white font-semibold mt-1">{t.title}</h4>
                    <p className="text-white/50 text-sm mt-2 leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad">
        <div className="container-lux grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <Counter key={s.label} target={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

import { motion } from "framer-motion";
import useSEO from "../hooks/useSEO";
import PageHero from "../components/layout/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import CTA from "../components/sections/CTA";
import { MANUFACTURING_PROCESS, COMPANY,MANUFACTURING_GALLERY } from "../data/company";

export default function Manufacturing() {
  useSEO(
    "Manufacturing",
    "Inside the Misha Jewels manufacturing facility at Surat SEZ — from CAD design and casting to stone setting, quality control and export."
  );

  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Where Craft Meets Precision"
        desc="Every piece of Misha Jewels moves through eight disciplined stages inside our Surat SEZ facility, from first sketch to final export."
        trail={[{ label: "Manufacturing" }]}
      />

      {/* Factory overview */}
      <section className="section-pad">
        <div className="container-lux grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Factory Overview"
              title="A Recognised Facility Within Surat SEZ"
              desc={`Our manufacturing unit spans approximately 1,000 sq. ft. within the ${COMPANY.manufacturingUnit.lines[1]}, carrying a production capacity of 1,500 grams of gold and silver jewellery per month as on March 31, 2026. The facility operates under a recognised Quality Management System.`}
            />
            <div className="grid grid-cols-2 gap-6 mt-10 max-w-md">
              <div>
                <p className="font-display text-3xl text-gold">1,000</p>
                <p className="text-white/50 text-xs uppercase tracking-wide mt-1">Sq. Ft. Facility</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">1,500g</p>
                <p className="text-white/50 text-xs uppercase tracking-wide mt-1">Monthly Capacity</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-sm glass overflow-hidden flex items-center justify-center"
          >
            <svg width="70%" height="70%" viewBox="0 0 200 140">
              <rect x="10" y="60" width="180" height="70" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
              <polygon points="10,60 100,20 190,60" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
              <line x1="50" y1="60" x2="50" y2="130" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
              <line x1="100" y1="60" x2="100" y2="130" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
              <line x1="150" y1="60" x2="150" y2="130" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
              <circle cx="100" cy="95" r="14" fill="none" stroke="#F1D982" strokeWidth="0.8" />
            </svg>
          </motion.div>
        </div>
      </section>

<section className="section-pad bg-[#0f1115] border-y hairline">
  <div className="container-lux">
    <SectionHeading eyebrow="Our Facility" title="Manufacturing Units" align="center" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
      {MANUFACTURING_GALLERY.map((unit, i) => (
        <motion.div
          key={unit.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative aspect-[4/3] rounded-sm overflow-hidden glass group"
        >
          <img
            src={unit.image}
            alt={unit.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <p className="absolute bottom-5 left-5 font-display text-xl text-white">{unit.title}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Process */}
      <section className="section-pad bg-[#0f1115] border-y hairline">
        <div className="container-lux">
          <SectionHeading eyebrow="The Process" title="Eight Stages, One Standard" align="center" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {MANUFACTURING_PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass rounded-sm p-7 relative overflow-hidden group"
              >
                <span className="absolute -top-3 -right-1 font-display text-6xl text-white/[0.04] group-hover:text-gold/10 transition-colors duration-500">
                  {step.step}
                </span>
                <p className="eyebrow mb-3">Step {step.step}</p>
                <h3 className="font-display text-xl text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow timeline */}
      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="Workflow" title="Design to Dispatch" align="center" />
          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
                className="h-full bg-gradient-to-r from-[#a9812c] via-[#f1d982] to-[#a9812c]"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-8 gap-8">
              {MANUFACTURING_PROCESS.map((step, i) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center mx-auto mb-3 text-gold font-display">
                    {i + 1}
                  </div>
                  <p className="text-xs text-white/60 uppercase tracking-wide">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSEO from "../hooks/useSEO";
import PageHero from "../components/layout/PageHero";
import CTA from "../components/sections/CTA";
import { JEWELLERY_CATEGORIES } from "../data/company";

export default function Jewellery() {
  useSEO(
    "Diamond Jewellery",
    "Explore Misha Jewels' categories — rings, earrings, chains, mangalsutra, bracelets and necklaces, handcrafted for domestic and export markets."
  );

  const [active, setActive] = useState("All");
  const filters = ["All", ...JEWELLERY_CATEGORIES.map((c) => c.title)];
  const shown =
    active === "All" ? JEWELLERY_CATEGORIES : JEWELLERY_CATEGORIES.filter((c) => c.title === active);

  return (
    <>
      <PageHero
        eyebrow="Jewellery"
        title="Every Category, Hand Finished"
        desc="From bridal necklaces to everyday bracelets — each category reflects the same discipline of craft."
        trail={[{ label: "Jewellery" }]}
      />

      <section className="section-pad pt-0">
        <div className="container-lux">
          <div className="flex flex-wrap gap-3 mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wide border transition-colors focus-gold ${
                  active === f
                    ? "bg-gold text-black border-gold"
                    : "border-white/15 text-white/60 hover:border-gold hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {shown.map((cat, i) => (
                <motion.div
                  layout
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="relative aspect-[4/5] overflow-hidden rounded-sm group cursor-pointer glass"
                >
                  <div
  className="absolute inset-0 -z-10"
  style={{
    background: `linear-gradient(155deg, hsl(${45 + i * 12} 22% 9%) 0%, #0a0a0a 55%, #050505 100%)`,
  }}
/>
<img
 src={cat.image}
 alt={cat.title}
  className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
/>
                  <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-55 transition-opacity duration-700">
                    <svg width="45%" height="45%" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="32" fill="none" stroke="#D4AF37" strokeWidth="0.6" />
                      <polygon points="50,22 70,45 62,78 38,78 30,45" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 30%, rgba(212,175,55,0.15) 50%, transparent 70%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="font-display text-2xl text-white mb-2">{cat.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-[90%]">{cat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}

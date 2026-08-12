import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import useSEO from "../hooks/useSEO";
import PageHero from "../components/layout/PageHero";

const CATEGORIES = ["All", "Factory", "Jewellery", "Diamonds", "Manufacturing"];

const ITEMS = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  category: CATEGORIES[1 + (i % 4)],
  tall: i % 3 === 0,
  hue: 40 + ((i * 11) % 30),
}));

function Tile({ item, onClick }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => onClick(item)}
      className={`relative w-full overflow-hidden rounded-sm mb-6 break-inside-avoid glass group focus-gold ${
        item.tall ? "aspect-[3/4]" : "aspect-square"
      }`}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        style={{ background: `linear-gradient(160deg, hsl(${item.hue} 22% 10%), #050505 70%)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-55 transition-opacity duration-500">
        <svg width="35%" height="35%" viewBox="0 0 100 100">
          <polygon points="50,10 85,38 68,90 32,90 15,38" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
        </svg>
      </div>
      <span className="absolute bottom-3 left-3 text-[0.65rem] uppercase tracking-wider text-white/60 glass px-3 py-1 rounded-full">
        {item.category}
      </span>
    </motion.button>
  );
}

export default function Gallery() {
  useSEO("Gallery", "A visual gallery of the Misha Jewels factory, manufacturing process, diamonds and finished jewellery.");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const shown = filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the House of Misha"
        desc="A visual record of our factory floor, manufacturing process, diamonds and finished jewellery."
        trail={[{ label: "Gallery" }]}
      />

      <section className="section-pad pt-0">
        <div className="container-lux">
          <div className="flex flex-wrap gap-3 mb-14">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wide border transition-colors focus-gold ${
                  filter === c
                    ? "bg-gold text-black border-gold"
                    : "border-white/15 text-white/60 hover:border-gold hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            <AnimatePresence>
              {shown.map((item) => (
                <Tile key={item.id} item={item} onClick={setSelected} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-[4/5] rounded-sm overflow-hidden glass"
            >
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(160deg, hsl(${selected.hue} 22% 10%), #050505 70%)` }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-50">
                <svg width="35%" height="35%" viewBox="0 0 100 100">
                  <polygon points="50,10 85,38 68,90 32,90 15,38" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                </svg>
              </div>
              <span className="absolute bottom-5 left-5 text-xs uppercase tracking-wider text-white/70 glass px-3 py-1.5 rounded-full">
                {selected.category}
              </span>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold focus-gold"
                aria-label="Close"
              >
                <HiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

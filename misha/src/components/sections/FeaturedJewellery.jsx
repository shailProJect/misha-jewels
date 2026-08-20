import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { JEWELLERY_CATEGORIES } from "../../data/company";
import SectionHeading from "../ui/SectionHeading";

export default function FeaturedJewellery() {
  return (
    <section className="section-pad relative">
      <div className="container-lux">
        <SectionHeading eyebrow="Collections" title="Featured Jewellery" align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {JEWELLERY_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group cursor-pointer"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  background: `linear-gradient(150deg, hsl(${40 + i * 8} 25% 10%) 0%, #0a0a0a 60%, #050505 100%)`,
                }}
              />
                           <div
                className="absolute inset-0 -z-10"
                style={{
                  background: `linear-gradient(150deg, hsl(${40 + i * 8} 25% 10%) 0%, #0a0a0a 60%, #050505 100%)`,
                }}
              />
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-xl text-white mb-1">{cat.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed max-w-[85%] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/jewellery" className="btn-outline">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}

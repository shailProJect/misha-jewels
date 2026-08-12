import { WHY_CHOOSE_US } from "../../data/company";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { HiOutlineSparkles, HiOutlineLightBulb, HiOutlineHandRaised, HiOutlineGlobeAlt, HiOutlineCheckBadge, HiOutlineScale } from "react-icons/hi2";

const icons = [HiOutlineSparkles, HiOutlineLightBulb, HiOutlineHandRaised, HiOutlineGlobeAlt, HiOutlineCheckBadge, HiOutlineScale];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-[#0f1115] relative">
      <div className="container-lux">
        <SectionHeading eyebrow="Why Misha Jewels" title="A Standard Built Into Every Piece" align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = icons[i];
            return (
              <GlassCard key={item.title} index={i}>
                <Icon className="text-gold text-3xl mb-5" />
                <h3 className="font-display text-xl mb-3 text-white">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

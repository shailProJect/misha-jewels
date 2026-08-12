import { STATS } from "../../data/company";
import Counter from "../ui/Counter";

export default function Stats() {
  return (
    <section className="section-pad bg-[#0f1115] border-y hairline relative">
      <div className="container-lux grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s) => (
          <Counter key={s.label} target={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}

import useCounter from "../../hooks/useCounter";

export default function Counter({ target, suffix = "", label }) {
  const [ref, value] = useCounter(target);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl text-white">
        {value.toLocaleString()}
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="text-white/50 text-xs tracking-[0.18em] uppercase mt-3">{label}</p>
    </div>
  );
}

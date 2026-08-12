import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function NotFound() {
  useSEO("Page Not Found", "The page you are looking for could not be found.");
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-display text-4xl md:text-6xl mb-6">This Page Isn't Set</h1>
      <p className="text-white/55 max-w-md mb-10">
        The page you're looking for doesn't exist. Let's guide you back to something brilliant.
      </p>
      <Link to="/" className="btn-gold">
        Back to Home
      </Link>
    </section>
  );
}

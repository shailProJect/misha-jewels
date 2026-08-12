import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { COMPANY, NAV_LINKS } from "../../data/company";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t hairline bg-[#050505]">
      <div className="container-lux py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <span className="font-display text-2xl text-white">
            Misha <span className="text-gold">Jewels</span>
          </span>
          <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-xs">
            Manufacturers &amp; exporters of premium diamond, gold and silver jewellery, crafted in
            Surat SEZ, Gujarat since {COMPANY.founded}.
          </p>
          <div className="flex gap-3 mt-6">
            {[FaInstagram, FaLinkedin, FaFacebookF, FaWhatsapp].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border hairline flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors focus-gold"
                aria-label="Social link"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 hover:text-gold text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Registered Office</h4>
          <p className="text-white/60 text-sm leading-relaxed">
            {COMPANY.registeredOffice.lines.join(", ")}
          </p>
          <h4 className="eyebrow mb-5 mt-6">Manufacturing Unit</h4>
          <p className="text-white/60 text-sm leading-relaxed">
            {COMPANY.manufacturingUnit.lines.join(", ")}
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Newsletter</h4>
          <p className="text-white/60 text-sm mb-4">Receive updates on new collections and export offerings.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center border-b hairline pb-2 focus-within:border-gold transition-colors"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="bg-transparent outline-none text-sm text-white placeholder:text-white/30 flex-1"
            />
            <button type="submit" className="text-gold text-sm font-medium tracking-wide focus-gold">
              Join
            </button>
          </form>
          <p className="text-white/40 text-xs mt-6">CIN: {COMPANY.cin}</p>
        </div>
      </div>

      <div className="container-lux border-t hairline py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <button
          onClick={scrollTop}
          className="w-10 h-10 rounded-full border hairline flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors focus-gold"
          aria-label="Back to top"
        >
          <HiArrowUp />
        </button>
      </div>
    </footer>
  );
}

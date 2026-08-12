import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiChevronDown } from "react-icons/hi";
import useSEO from "../hooks/useSEO";
import PageHero from "../components/layout/PageHero";
import GlassCard from "../components/ui/GlassCard";
import { COMPANY, FAQS } from "../data/company";

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b hairline"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-6 text-left focus-gold"
      >
        <span className="font-display text-lg text-white pr-6">{item.q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-gold shrink-0">
          <HiChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/55 text-sm leading-relaxed pb-6 max-w-2xl">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  useSEO(
    "Contact",
    "Get in touch with Misha Jewels Private Limited — registered office in Ahmedabad, manufacturing unit in Surat SEZ, Gujarat."
  );

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation"
        desc="For manufacturing enquiries, export partnerships or bespoke orders, reach our team directly."
        trail={[{ label: "Contact" }]}
      />

      <section className="section-pad pt-0">
        <div className="container-lux grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10">
          {/* Contact info cards */}
          <div className="space-y-6">
            <GlassCard index={0}>
              <div className="flex gap-4">
                <HiOutlineLocationMarker className="text-gold text-2xl shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg text-white mb-2">Registered Office</h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {COMPANY.registeredOffice.lines.join(", ")}
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard index={1}>
              <div className="flex gap-4">
                <HiOutlineLocationMarker className="text-gold text-2xl shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg text-white mb-2">Manufacturing Unit</h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {COMPANY.manufacturingUnit.lines.join(", ")}
                  </p>
                </div>
              </div>
            </GlassCard>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <GlassCard index={2}>
                <div className="flex gap-4">
                  <HiOutlinePhone className="text-gold text-2xl shrink-0" />
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-1">Phone</h3>
                    <a href={`tel:${COMPANY.phoneRaw}`} className="text-white/55 text-sm hover:text-gold">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </GlassCard>
              <GlassCard index={3}>
                <div className="flex gap-4">
                  <HiOutlineMail className="text-gold text-2xl shrink-0" />
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-1">Email</h3>
                    <a href={`mailto:${COMPANY.email}`} className="text-white/55 text-sm hover:text-gold break-all">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </GlassCard>
            </div>
            <GlassCard index={4}>
              <div className="flex gap-4">
                <HiOutlineClock className="text-gold text-2xl shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg text-white mb-3">Business Hours</h3>
                  {COMPANY.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm text-white/55 mb-1">
                      <span>{h.day}</span>
                      <span className="text-white/70">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Inquiry form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-sm p-8 md:p-10 h-fit"
          >
            <h3 className="font-display text-2xl text-white mb-2">Send an Inquiry</h3>
            <p className="text-white/50 text-sm mb-8">We typically respond within one business day.</p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-10 text-center"
                >
                  <p className="font-display text-xl text-gold mb-2">Thank you.</p>
                  <p className="text-white/55 text-sm">
                    Your inquiry has been received. Our team will reach out shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-5" exit={{ opacity: 0 }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/50 mb-2 block">Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border-b hairline pb-2 text-sm text-white outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/50 mb-2 block">Phone</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-transparent border-b hairline pb-2 text-sm text-white outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-white/50 mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b hairline pb-2 text-sm text-white outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-white/50 mb-2 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b hairline pb-2 text-sm text-white outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center mt-4">
                    Submit Inquiry
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Map */}
        <div className="container-lux mt-6">
          <div className="relative aspect-[21/9] rounded-sm overflow-hidden glass">
            <iframe
              title="Misha Jewels location"
              src="https://www.google.com/maps?q=Navrangpura,Ahmedabad,Gujarat&output=embed"
              className="w-full h-full grayscale contrast-125 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#0f1115] border-t hairline">
        <div className="container-lux max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl mb-10">Frequently Asked Questions</h2>
          <div>
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} item={f} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

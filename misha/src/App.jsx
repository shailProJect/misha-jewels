import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CursorGlow from "./components/layout/CursorGlow";
import ScrollProgress from "./components/layout/ScrollProgress";
import BackToTop from "./components/layout/BackToTop";
import Loader from "./components/layout/Loader";
import PageTransition from "./components/layout/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import Manufacturing from "./pages/Manufacturing";
import Diamonds from "./pages/Diamonds";
import Jewellery from "./pages/Jewellery";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader show={loading} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/manufacturing" element={<PageTransition><Manufacturing /></PageTransition>} />
            <Route path="/diamonds" element={<PageTransition><Diamonds /></PageTransition>} />
            <Route path="/jewellery" element={<PageTransition><Jewellery /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

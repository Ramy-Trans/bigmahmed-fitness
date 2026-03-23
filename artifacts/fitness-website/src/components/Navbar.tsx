import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollTo = useSmoothScroll();
  const { t, isArabic, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("Home"), href: "hero" },
    { name: t("Transformations"), href: "transformations" },
    { name: t("About"), href: "about" },
    { name: t("Pricing"), href: "pricing" },
  ];

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div
          className="text-2xl sm:text-3xl font-display font-bold tracking-widest cursor-pointer text-white flex items-center gap-1"
          onClick={() => handleNavClick("hero")}
        >
          <span className="text-primary">BIG</span> MAHMED
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-semibold text-white/80 hover:text-primary transition-colors tracking-wide uppercase ${isArabic ? "font-arabic" : ""}`}
            >
              {link.name}
            </button>
          ))}

          {/* Arabic / English Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-white/70 hover:border-primary/60 hover:text-primary transition-all text-sm font-semibold tracking-wide"
            title={isArabic ? "Switch to English" : "تبديل للعربية"}
          >
            {isArabic ? (
              <>
                <span className="text-base leading-none">🇬🇧</span>
                <span>EN</span>
              </>
            ) : (
              <>
                <span className="text-base leading-none">🇪🇬</span>
                <span>عربي</span>
              </>
            )}
          </button>

          <button
            onClick={() => handleNavClick("apply")}
            className="px-5 py-2 bg-primary text-black font-display text-lg rounded hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(255,215,0,0.3)] whitespace-nowrap"
          >
            {t("Start Now")}
          </button>
        </div>

        {/* Mobile: Language toggle + Menu */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-full border border-white/20 text-white/70 hover:border-primary/60 hover:text-primary transition-all text-xs font-semibold"
          >
            {isArabic ? "EN" : "عربي"}
          </button>
          <button
            className="text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className={`px-4 pt-2 pb-6 flex flex-col space-y-3 ${isArabic ? "items-end text-right" : ""}`}>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-lg font-semibold text-white/80 hover:text-primary py-2 border-b border-white/5 uppercase transition-colors ${isArabic ? "text-right font-arabic" : "text-left"}`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("apply")}
                className="mt-2 py-3 bg-primary text-black font-display text-xl rounded text-center w-full shadow-[0_0_15px_rgba(255,215,0,0.3)]"
              >
                {t("Start Now")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

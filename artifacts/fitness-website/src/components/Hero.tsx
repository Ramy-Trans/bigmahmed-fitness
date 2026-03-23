import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const scrollTo = useSmoothScroll();
  const baseUrl = import.meta.env.BASE_URL;
  const { t, isArabic } = useLanguage();

  return (
    <section id="hero" className="relative flex items-end justify-start overflow-hidden pb-20 sm:pb-28 md:pb-36" style={{ minHeight: "100svh" }}>
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${baseUrl}coach4.jpg`}
          alt="Mohamed Ahmed on the beach"
          className="w-full h-full object-cover"
          style={{ objectPosition: "65% 15%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isArabic ? "text-right" : "text-left"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 glass-panel mb-5 shadow-[0_0_20px_rgba(255,215,0,0.15)] ${isArabic ? "flex-row-reverse" : ""}`}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
          <span className={`text-xs font-semibold uppercase tracking-widest text-primary ${isArabic ? "font-arabic" : ""}`}>
            {t("Limited Spots Available")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-5xl sm:text-6xl md:text-8xl font-display leading-[0.9] text-white drop-shadow-2xl mb-6 ${isArabic ? "font-arabic leading-tight text-4xl sm:text-5xl md:text-7xl" : ""}`}
        >
          {t("Transform Your Body.")} <br />
          <span className="text-gradient-gold">{t("Build Your Best Version.")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-8 max-w-xl leading-relaxed ${isArabic ? "font-arabic" : ""}`}
        >
          {t("Online coaching with real results — trusted by 100+ clients. Custom workouts, nutrition, and daily support to achieve the physique you deserve.")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`flex flex-col sm:flex-row gap-4 ${isArabic ? "sm:flex-row-reverse justify-end" : ""}`}
        >
          <button
            onClick={() => scrollTo("apply")}
            className="btn-primary group flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            {t("Start Your Transformation")}
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isArabic ? "rotate-180" : ""}`} />
          </button>
          <button
            onClick={() => scrollTo("transformations")}
            className={`px-6 py-3 sm:py-4 rounded-md font-display text-lg sm:text-xl tracking-wider border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300 ${isArabic ? "font-arabic" : ""}`}
          >
            {t("View Results")}
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer text-white/40 hover:text-primary transition-colors animate-bounce"
        onClick={() => scrollTo("transformations")}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

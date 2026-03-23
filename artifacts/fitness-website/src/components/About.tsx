import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const baseUrl = import.meta.env.BASE_URL;
  const { t, isArabic } = useLanguage();

  const stats = [
    { value: "100+", label: t("Clients Transformed") },
    { value: "5+", label: t("Years Experience") },
    { value: "95%", label: t("Success Rate") },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isArabic ? "lg:grid-flow-dense" : ""}`}>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${isArabic ? "lg:col-start-2" : ""}`}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/10 aspect-[3/4] sm:aspect-square lg:aspect-[4/5]">
              <img
                src={`${baseUrl}coach2.jpg`}
                alt="Mohamed Ahmed Most Muscular Pose"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-10 w-1/2 sm:w-2/3 aspect-square rounded-2xl overflow-hidden border-4 border-background z-20 shadow-2xl hidden sm:block">
              <img
                src={`${baseUrl}coach5.jpg`}
                alt="Mohamed Ahmed on stage"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent blur-2xl -z-10 rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${isArabic ? "lg:col-start-1 text-right" : ""}`}
          >
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-display text-white mb-6 ${isArabic ? "font-arabic" : ""}`}>
              {t("Meet")} <br /><span className="text-gradient-gold">{t("Big Mahmed")}</span>
            </h2>

            <div className={`space-y-5 text-base sm:text-lg text-gray-300 mb-10 leading-relaxed ${isArabic ? "font-arabic" : ""}`}>
              <p>{t("I am Mohamed Ahmed, a professional bodybuilder and online fitness coach dedicated to pushing limits and redefining what's possible. I've competed at the highest levels in the Egyptian championships and know exactly what it takes to build a world-class physique.")}</p>
              <p>{t("My coaching isn't about generic PDFs. It's about elite-level programming, aggressive accountability, and a relentless pursuit of results. Whether you want to step on stage or just get the leanest you've ever been, I have the blueprint.")}</p>
            </div>

            <div className={`grid grid-cols-3 gap-4 sm:gap-6 py-6 border-t border-white/10 ${isArabic ? "text-right" : ""}`}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-display text-primary mb-1">{stat.value}</div>
                  <div className={`text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide ${isArabic ? "font-arabic" : ""}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

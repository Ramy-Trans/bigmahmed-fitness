import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function HowItWorks() {
  const { t, isArabic } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t("Apply"),
      description: t("Fill out the consultation form below to tell me about your current physique and goals."),
    },
    {
      number: "02",
      title: t("Get Your Plan"),
      description: t("I will design a 100% personalized training and nutrition protocol suited to your lifestyle."),
    },
    {
      number: "03",
      title: t("Transform"),
      description: t("Execute the plan with my daily guidance, weekly check-ins, and ongoing adjustments."),
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-card/30 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl sm:text-5xl md:text-6xl font-display text-white mb-4 ${isArabic ? "font-arabic" : ""}`}
          >
            {t("How It")} <span className="text-primary">{t("Works")}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
          <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-[2px] bg-white/10 z-0">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 sm:w-[100px] sm:h-[100px] rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,215,0,0.15)] relative">
                <span className="text-3xl sm:text-4xl font-display text-primary">{step.number}</span>
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20" style={{ animationDuration: "3s" }} />
              </div>
              <h3 className={`text-xl sm:text-2xl font-display text-white mb-3 ${isArabic ? "font-arabic" : ""}`}>{step.title}</h3>
              <p className={`text-gray-400 max-w-sm text-sm sm:text-base ${isArabic ? "font-arabic" : ""}`}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useLanguage } from "@/contexts/LanguageContext";

export function Pricing() {
  const scrollTo = useSmoothScroll();
  const { t, isArabic } = useLanguage();

  const plans = [
    {
      name: "Basic",
      price: "999",
      popular: false,
      features: [
        { name: t("Custom Training Plan"), included: true },
        { name: t("Basic Nutrition Guide"), included: true },
        { name: t("Weekly Check-in"), included: true },
        { name: t("Form Review"), included: false },
        { name: t("Daily WhatsApp Support"), included: false },
        { name: t("Video Calls"), included: false },
      ],
      cta: t("Select Basic"),
    },
    {
      name: "Pro",
      price: "1,499",
      popular: true,
      features: [
        { name: t("Custom Training Plan"), included: true },
        { name: t("Full Custom Nutrition Plan"), included: true },
        { name: t("Daily Check-in"), included: true },
        { name: t("Form Review via Video"), included: true },
        { name: t("Daily WhatsApp Support"), included: true },
        { name: t("Monthly Video Call"), included: true },
      ],
      cta: t("Select Pro"),
    },
    {
      name: "Elite",
      price: "2,499",
      popular: false,
      features: [
        { name: t("Everything in Pro"), included: true },
        { name: t("Priority 24/7 Access"), included: true },
        { name: t("Daily Video Check-ins"), included: true },
        { name: t("Competition Prep"), included: true },
        { name: t("Peak Week Protocol"), included: true },
        { name: t("Advanced Supplementation"), included: true },
      ],
      cta: t("Select Elite"),
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-card/20 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl sm:text-5xl md:text-6xl font-display text-white mb-4 ${isArabic ? "font-arabic" : ""}`}
          >
            {t("Invest in")} <span className="text-primary">{t("Yourself")}</span>
          </motion.h2>
          <p className={`text-gray-400 max-w-2xl mx-auto text-base sm:text-lg ${isArabic ? "font-arabic" : ""}`}>
            {t("Straightforward pricing. Choose the level of accountability you need to reach your goals.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative rounded-2xl glass-panel p-7 sm:p-8 flex flex-col h-full ${
                plan.popular
                  ? "border-primary/50 bg-primary/5 scale-100 md:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.15)] z-10"
                  : "border-white/10 opacity-90 hover:opacity-100"
              } ${isArabic ? "text-right" : ""}`}
            >
              {plan.popular && (
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-bold uppercase tracking-widest text-xs px-4 py-1 rounded-full whitespace-nowrap ${isArabic ? "font-arabic" : ""}`}>
                  {t("Most Popular")}
                </div>
              )}

              <h3 className="text-2xl sm:text-3xl font-display text-white mb-2">{plan.name}</h3>
              <div className={`mb-6 flex items-baseline gap-2 ${isArabic ? "flex-row-reverse justify-end" : ""}`}>
                <span className="text-4xl sm:text-5xl font-display text-primary">{plan.price}</span>
                <span className={`text-gray-400 font-medium ${isArabic ? "font-arabic" : ""}`}>{t("EGP / mo")}</span>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <div key={i} className={`flex items-start gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    {feat.included ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm sm:text-base ${feat.included ? "text-gray-200" : "text-gray-600"} ${isArabic ? "font-arabic" : ""}`}>
                      {feat.name}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("apply")}
                className={`w-full py-3 sm:py-4 rounded font-display tracking-wider text-lg sm:text-xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-black hover:bg-primary/90 hover:scale-[1.02]"
                    : "bg-white/10 text-white hover:bg-white/20"
                } ${isArabic ? "font-arabic" : ""}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

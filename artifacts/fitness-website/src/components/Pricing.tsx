import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Pricing() {
  const scrollTo = useSmoothScroll();

  const plans = [
    {
      name: "Basic",
      price: "999",
      popular: false,
      features: [
        { name: "Custom Training Plan", included: true },
        { name: "Basic Nutrition Guide", included: true },
        { name: "Weekly Check-in", included: true },
        { name: "Form Review", included: false },
        { name: "Daily WhatsApp Support", included: false },
        { name: "Video Calls", included: false },
      ]
    },
    {
      name: "Pro",
      price: "1,499",
      popular: true,
      features: [
        { name: "Custom Training Plan", included: true },
        { name: "Full Custom Nutrition Plan", included: true },
        { name: "Daily Check-in", included: true },
        { name: "Form Review via Video", included: true },
        { name: "Daily WhatsApp Support", included: true },
        { name: "Monthly Video Call", included: true },
      ]
    },
    {
      name: "Elite",
      price: "2,499",
      popular: false,
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Priority 24/7 Access", included: true },
        { name: "Daily Video Check-ins", included: true },
        { name: "Competition Prep", included: true },
        { name: "Peak Week Protocol", included: true },
        { name: "Advanced Supplementation", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-card/20 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display text-white mb-4"
          >
            Invest in <span className="text-primary">Yourself</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Straightforward pricing. Choose the level of accountability you need to reach your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative rounded-2xl glass-panel p-8 flex flex-col h-full ${
                plan.popular 
                  ? "border-primary/50 bg-primary/5 scale-100 md:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.15)] z-10" 
                  : "border-white/10 opacity-90 hover:opacity-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-bold uppercase tracking-widest text-xs px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-3xl font-display text-white mb-2">{plan.name}</h3>
              <div className="mb-6 flex items-baseline">
                <span className="text-5xl font-display text-primary">{plan.price}</span>
                <span className="text-gray-400 ml-2 font-medium">EGP / mo</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {feat.included ? (
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                    )}
                    <span className={feat.included ? "text-gray-200" : "text-gray-600"}>
                      {feat.name}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollTo("apply")}
                className={`w-full py-4 rounded font-display tracking-wider text-xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-black hover:bg-primary/90 hover:scale-[1.02]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Select {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

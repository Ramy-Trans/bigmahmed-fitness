import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Fill out the consultation form below to tell me about your current physique and goals."
    },
    {
      number: "02",
      title: "Get Your Plan",
      description: "I will design a 100% personalized training and nutrition protocol suited to your lifestyle."
    },
    {
      number: "03",
      title: "Transform",
      description: "Execute the plan with my daily guidance, weekly check-ins, and ongoing adjustments."
    }
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display text-white mb-4"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
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
              <div className="w-[100px] h-[100px] rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,215,0,0.15)] relative">
                <span className="text-4xl font-display text-primary">{step.number}</span>
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20" style={{ animationDuration: '3s' }} />
              </div>
              <h3 className="text-2xl font-display text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

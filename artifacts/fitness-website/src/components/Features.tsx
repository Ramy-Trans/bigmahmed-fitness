import { motion } from "framer-motion";
import { Dumbbell, MessageCircle, TrendingUp, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Dumbbell className="w-8 h-8 text-primary" />,
      title: "Custom Training Plans",
      description: "Workouts tailored entirely to your body type, experience level, and goals."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Daily WhatsApp Support",
      description: "Direct access to me. Ask questions, send form videos, and get fast feedback."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Proven Track Record",
      description: "Over 100 successful transformations using data-backed nutrition protocols."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Fast Visible Results",
      description: "Stop wasting time. We focus on efficiency and intensity for rapid progress."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

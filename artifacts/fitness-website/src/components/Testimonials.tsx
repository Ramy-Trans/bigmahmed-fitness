import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed M.",
      age: 22,
      text: "Lost 13kg in 8 weeks with Big Mahmed's program. The meal plan was surprisingly easy to follow. Life changing!"
    },
    {
      name: "Omar K.",
      age: 19,
      text: "Gained serious muscle in 12 weeks. I was stuck at 55kg for years, now sitting comfortably at 70kg. The plan was perfect."
    },
    {
      name: "Youssef A.",
      age: 25,
      text: "The daily WhatsApp support makes all the difference. Knowing coach is reviewing my form every day kept me pushing harder. Worth every penny!"
    },
    {
      name: "Sara L.",
      age: 28,
      text: "Finally found a coach who understands real results, not just empty promises. The recomp plan changed my entire physique."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Quote className="w-16 h-16 text-primary/40 mx-auto mb-8 rotate-180" />
        
        <div className="h-[200px] md:h-[150px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-3xl text-white font-medium italic leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="font-display tracking-widest text-primary text-xl">
                {testimonials[currentIndex].name} <span className="text-white/50 text-sm">| {testimonials[currentIndex].age}yo</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-primary" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

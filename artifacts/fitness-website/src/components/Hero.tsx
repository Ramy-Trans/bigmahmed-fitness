import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Hero() {
  const scrollTo = useSmoothScroll();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${baseUrl}coach4.jpg`} 
          alt="Mohamed Ahmed on the beach" 
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 lg:w-3/5 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-6 border-primary/30 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Limited Spots Available</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl md:text-8xl font-display leading-[0.9] text-white drop-shadow-2xl mb-6"
          >
            Transform Your Body. <br />
            <span className="text-gradient-gold">Build Your Best Version.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 font-medium mb-10 max-w-xl leading-relaxed"
          >
            Online coaching with real results — trusted by 100+ clients. Custom workouts, nutrition, and daily support to achieve the physique you deserve.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => scrollTo("apply")}
              className="btn-primary group flex items-center justify-center gap-2"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo("transformations")}
              className="px-8 py-4 rounded-md font-display text-xl tracking-wider border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              View Results
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-white/50 hover:text-primary transition-colors animate-bounce"
        onClick={() => scrollTo("transformations")}
      >
        <ChevronDown size={36} />
      </motion.div>
    </section>
  );
}

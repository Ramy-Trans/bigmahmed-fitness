import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function FinalCTA() {
  const scrollTo = useSmoothScroll();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src={`${baseUrl}coach3.jpg`} 
          alt="Mohamed Ahmed Background" 
          className="w-full h-full object-cover object-top filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-display text-white mb-6 uppercase tracking-tight"
        >
          Stop <span className="text-primary">Waiting.</span><br/>
          Start <span className="text-primary">Transforming.</span>
        </motion.h2>
        
        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-2xl mx-auto">
          The time will pass anyway. You can either be exactly where you are right now, or you can be in the best shape of your life.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo("apply")}
          className="bg-primary text-black font-display text-3xl px-12 py-6 rounded-lg uppercase tracking-widest shadow-[0_0_40px_rgba(255,215,0,0.4)] hover:shadow-[0_0_60px_rgba(255,215,0,0.6)] transition-all duration-300"
        >
          Join Team Mahmed
        </motion.button>
      </div>
    </section>
  );
}

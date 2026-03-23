import { motion } from "framer-motion";

export function About() {
  const baseUrl = import.meta.env.BASE_URL;

  const stats = [
    { value: "100+", label: "Clients Transformed" },
    { value: "5+", label: "Years Experience" },
    { value: "95%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/10 aspect-[3/4] md:aspect-square lg:aspect-[4/5]">
              <img 
                src={`${baseUrl}coach2.jpg`} 
                alt="Mohamed Ahmed Most Muscular Pose" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlay Image */}
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden border-4 border-background z-20 shadow-2xl hidden sm:block">
              <img 
                src={`${baseUrl}coach5.jpg`} 
                alt="Mohamed Ahmed on stage" 
                className="w-full h-full object-cover"
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
          >
            <h2 className="text-5xl md:text-6xl font-display text-white mb-6">
              Meet <br/><span className="text-gradient-gold">Big Mahmed</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 mb-10 leading-relaxed">
              <p>
                I am Mohamed Ahmed, a professional bodybuilder and online fitness coach dedicated to pushing limits and redefining what's possible. I've competed at the highest levels in the Egyptian championships and know exactly what it takes to build a world-class physique.
              </p>
              <p>
                My coaching isn't about generic PDFs. It's about elite-level programming, aggressive accountability, and a relentless pursuit of results. Whether you want to step on stage or just get the leanest you've ever been, I have the blueprint.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-display text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Fat Loss" | "Muscle Gain" | "Recomp";

interface Transformation {
  id: number;
  image: string;
  category: Category;
  title: string;
  duration: string;
}

export function Transformations() {
  const [filter, setFilter] = useState<Category>("All");
  const baseUrl = import.meta.env.BASE_URL;

  const categories: Category[] = ["All", "Fat Loss", "Muscle Gain", "Recomp"];

  const transformations: Transformation[] = [
    { id: 1, image: "ba1.jpg", category: "Muscle Gain", title: "Muscle Mass Phase", duration: "12 Weeks" },
    { id: 2, image: "ba2.jpg", category: "Fat Loss", title: "Extreme Shred", duration: "6 Weeks" },
    { id: 3, image: "ba3.jpg", category: "Fat Loss", title: "90kg to 77kg Drop", duration: "8 Weeks" },
    { id: 4, image: "ba4.jpg", category: "Muscle Gain", title: "55kg to 74kg Build", duration: "6 Months" },
    { id: 5, image: "ba5.jpg", category: "Recomp", title: "Body Recomposition", duration: "4 Weeks" },
    { id: 6, image: "ba6.jpg", category: "Muscle Gain", title: "Teen Transformation", duration: "12 Weeks" },
  ];

  const filteredData = filter === "All" 
    ? transformations 
    : transformations.filter(t => t.category === filter);

  return (
    <section id="transformations" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display text-white mb-4"
          >
            Real <span className="text-primary">Results</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No empty promises, just hard work and proven protocols. See what happens when you commit to the process.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 border ${
                filter === cat 
                  ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(255,215,0,0.3)]" 
                  : "bg-transparent text-gray-400 border-white/10 hover:border-primary/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-card border border-white/5"
              >
                <img 
                  src={`${baseUrl}${item.image}`} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider rounded mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-display text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 font-medium">{item.duration}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = "All" | "Fat Loss" | "Muscle Gain" | "Recomp";

const categoryTranslations: Record<Category, string> = {
  "All": "الكل",
  "Fat Loss": "حرق دهون",
  "Muscle Gain": "بناء عضلات",
  "Recomp": "إعادة تشكيل",
};

const titleTranslations: Record<string, string> = {
  "Muscle Mass Phase": "مرحلة بناء الكتلة العضلية",
  "Extreme Shred": "حرق مكثف",
  "90kg to 77kg Drop": "من ٩٠ إلى ٧٧ كيلو",
  "55kg to 74kg Build": "من ٥٥ إلى ٧٤ كيلو",
  "Body Recomposition": "إعادة تشكيل الجسم",
  "Teen Transformation": "تحول الشباب",
};

const durationTranslations: Record<string, string> = {
  "12 Weeks": "١٢ أسبوع",
  "6 Weeks": "٦ أسابيع",
  "8 Weeks": "٨ أسابيع",
  "6 Months": "٦ أشهر",
  "4 Weeks": "٤ أسابيع",
};

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
  const { isArabic } = useLanguage();

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
    : transformations.filter((item) => item.category === filter);

  const getCategoryLabel = (cat: Category) =>
    isArabic ? categoryTranslations[cat] : cat;

  return (
    <section id="transformations" className="py-20 sm:py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl sm:text-5xl md:text-6xl font-display text-white mb-4 ${isArabic ? "font-arabic" : ""}`}
          >
            {isArabic ? "نتائج" : "Real"}{" "}
            <span className="text-primary">{isArabic ? "حقيقية" : "Results"}</span>
          </motion.h2>
          <p className={`text-gray-400 max-w-2xl mx-auto text-base sm:text-lg ${isArabic ? "font-arabic" : ""}`}>
            {isArabic
              ? "لا وعود فارغة، فقط عمل جاد وبروتوكولات مثبتة. شاهد ما يحدث عندما تلتزم بالخطة."
              : "No empty promises, just hard work and proven protocols. See what happens when you commit to the process."}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 sm:px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 border ${isArabic ? "font-arabic" : ""} ${
                filter === cat
                  ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-primary/50 hover:text-white"
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                <div className={`absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ${isArabic ? "text-right" : ""}`}>
                  <div className={`inline-block px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider rounded mb-2 ${isArabic ? "font-arabic" : ""}`}>
                    {getCategoryLabel(item.category)}
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-display text-white mb-1 ${isArabic ? "font-arabic font-bold" : ""}`}>
                    {isArabic ? (titleTranslations[item.title] ?? item.title) : item.title}
                  </h3>
                  <p className={`text-gray-300 font-medium ${isArabic ? "font-arabic" : ""}`}>
                    {isArabic ? (durationTranslations[item.duration] ?? item.duration) : item.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

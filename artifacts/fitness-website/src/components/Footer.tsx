import { Instagram, MessageCircle } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const scrollTo = useSmoothScroll();
  const { t, isArabic } = useLanguage();

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row justify-between items-center gap-6 ${isArabic ? "md:flex-row-reverse" : ""}`}>

          <div className={`text-center ${isArabic ? "md:text-right" : "md:text-left"}`}>
            <div
              className="text-3xl font-display font-bold tracking-widest cursor-pointer text-white mb-2"
              onClick={() => scrollTo("hero")}
            >
              <span className="text-primary">BIG</span> MAHMED
            </div>
            <p className={`text-gray-500 font-semibold tracking-wide uppercase text-sm ${isArabic ? "font-arabic" : ""}`}>
              {t("Results. Not Promises.")}
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/bigmahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/201044039220?text=I%20want%20to%20join%20your%20coaching%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Big Mahmed Fitness. {t("All rights reserved.")}
        </div>
      </div>
    </footer>
  );
}

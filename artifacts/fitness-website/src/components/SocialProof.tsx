import { useLanguage } from "@/contexts/LanguageContext";

export function SocialProof() {
  const { t } = useLanguage();

  const items = [
    t("100+ Clients Transformed"),
    t("95% Success Rate"),
    t("5+ Years Experience"),
    t("Proven Results"),
    t("Custom Plans"),
    t("Daily Support"),
    t("Premium Coaching"),
  ];

  const doubled = [...items, ...items];

  return (
    <div className="w-full bg-background/80 border-y border-white/10 py-4 overflow-hidden relative" style={{ marginTop: 0 }}>
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className="flex will-change-transform"
        style={{ animation: "marquee 35s linear infinite", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0 px-6 sm:px-10">
            <span className="text-primary text-lg shrink-0" style={{ fontFamily: "Bebas Neue, sans-serif" }}>★</span>
            <span
              className="ml-3 font-semibold tracking-widest text-sm sm:text-base text-white/70 uppercase whitespace-nowrap"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

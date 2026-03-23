export function SocialProof() {
  const items = [
    "100+ Clients Transformed",
    "95% Success Rate",
    "5+ Years Experience",
    "Proven Results",
    "Custom Plans",
    "Daily Support",
    "Premium Coaching",
  ];

  return (
    <div className="w-full bg-background/50 border-y border-white/5 py-4 overflow-hidden relative glass-panel z-10 -mt-1">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex w-[200%] sm:w-[150%] md:w-full overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap min-w-full justify-around items-center">
          {items.map((item, i) => (
            <div key={i} className="flex items-center px-8">
              <span className="text-primary font-display text-xl mx-4">★</span>
              <span className="font-display tracking-widest text-xl text-white/70 uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap min-w-full justify-around items-center absolute top-0" style={{ left: "100%" }}>
          {items.map((item, i) => (
            <div key={`copy-${i}`} className="flex items-center px-8">
              <span className="text-primary font-display text-xl mx-4">★</span>
              <span className="font-display tracking-widest text-xl text-white/70 uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

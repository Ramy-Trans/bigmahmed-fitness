import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "en" | "ar";

const translations: Record<string, string> = {
  // Navbar
  "Home": "الرئيسية",
  "Transformations": "التحولات",
  "About": "عني",
  "Pricing": "الأسعار",
  "Start Now": "ابدأ الآن",
  "Apply": "قدّم طلبك",

  // Hero
  "Transform Your Body.": "حوّل جسمك.",
  "Build Your Best Version.": "ابنِ أفضل نسخة منك.",
  "Online coaching with real results — trusted by 100+ clients. Custom workouts, nutrition, and daily support to achieve the physique you deserve.":
    "تدريب أونلاين بنتائج حقيقية — يثق به أكثر من ١٠٠ عميل. تمارين مخصصة وتغذية ودعم يومي لتحقيق الجسم الذي تستحقه.",
  "Start Your Transformation": "ابدأ تحولك",
  "View Results": "شاهد النتائج",
  "Limited Spots Available": "أماكن محدودة متاحة",

  // Social Proof
  "100+ Clients Transformed": "+١٠٠ عميل تحوّلوا",
  "95% Success Rate": "٩٥٪ نسبة نجاح",
  "5+ Years Experience": "+٥ سنوات خبرة",
  "Proven Results": "نتائج مثبتة",
  "Custom Plans": "خطط مخصصة",
  "Daily Support": "دعم يومي",
  "Premium Coaching": "تدريب متميز",

  // Features
  "Custom Training Plans": "خطط تدريب مخصصة",
  "Workouts tailored entirely to your body type, experience level, and goals.":
    "تمارين مصممة خصيصاً لنوع جسمك ومستواك وأهدافك.",
  "Daily WhatsApp Support": "دعم يومي عبر واتساب",
  "Direct access to me. Ask questions, send form videos, and get fast feedback.":
    "وصول مباشر إليّ. اطرح أسئلتك وأرسل فيديوهات أدائك واحصل على ردود سريعة.",
  "Proven Track Record": "سجل ناجح ومثبت",
  "Over 100 successful transformations using data-backed nutrition protocols.":
    "أكثر من ١٠٠ تحول ناجح باستخدام بروتوكولات تغذية مدعومة بالبيانات.",
  "Fast Visible Results": "نتائج سريعة وملموسة",
  "Stop wasting time. We focus on efficiency and intensity for rapid progress.":
    "لا تضيع وقتك. نركز على الكفاءة والشدة لتحقيق تقدم سريع.",

  // How It Works
  "How It": "كيف",
  "Works": "يعمل",
  "Fill out the consultation form below to tell me about your current physique and goals.":
    "املأ نموذج الاستشارة أدناه لأخبرني عن وضعك الحالي وأهدافك.",
  "Get Your Plan": "احصل على خطتك",
  "I will design a 100% personalized training and nutrition protocol suited to your lifestyle.":
    "سأصمم لك بروتوكول تدريب وتغذية مخصص ١٠٠٪ يناسب أسلوب حياتك.",
  "Transform": "تحوّل",
  "Execute the plan with my daily guidance, weekly check-ins, and ongoing adjustments.":
    "نفّذ الخطة بتوجيهي اليومي ومتابعة أسبوعية وتعديلات مستمرة.",

  // About
  "Meet": "تعرّف على",
  "Big Mahmed": "بيج محمد",
  "I am Mohamed Ahmed, a professional bodybuilder and online fitness coach dedicated to pushing limits and redefining what's possible. I've competed at the highest levels in the Egyptian championships and know exactly what it takes to build a world-class physique.":
    "أنا محمد أحمد، لاعب كمال أجسام محترف ومدرب لياقة أونلاين مكرس لتجاوز الحدود وإعادة تعريف الممكن. تنافست على أعلى المستويات في البطولات المصرية وأعرف تماماً ما يتطلبه بناء جسم عالمي المستوى.",
  "My coaching isn't about generic PDFs. It's about elite-level programming, aggressive accountability, and a relentless pursuit of results. Whether you want to step on stage or just get the leanest you've ever been, I have the blueprint.":
    "تدريبي ليس عن ملفات PDF عشوائية. إنه عن برمجة بمستوى النخبة، ومحاسبة صارمة، وسعي لا هوادة فيه نحو النتائج. سواء أردت الصعود إلى المنصة أو الوصول لأفضل قوام في حياتك، لدي الخطة.",
  "Clients Transformed": "عملاء تحوّلوا",
  "Years Experience": "سنوات خبرة",
  "Success Rate": "نسبة نجاح",

  // Pricing
  "Invest in": "استثمر في",
  "Yourself": "نفسك",
  "Straightforward pricing. Choose the level of accountability you need to reach your goals.":
    "أسعار واضحة. اختر مستوى المحاسبة الذي تحتاجه للوصول إلى أهدافك.",
  "Custom Training Plan": "خطة تدريب مخصصة",
  "Basic Nutrition Guide": "دليل تغذية أساسي",
  "Weekly Check-in": "متابعة أسبوعية",
  "Form Review": "مراجعة الأداء",
  "Daily WhatsApp Support-feat": "دعم واتساب يومي",
  "Video Calls": "مكالمات فيديو",
  "Full Custom Nutrition Plan": "خطة تغذية مخصصة كاملة",
  "Daily Check-in": "متابعة يومية",
  "Form Review via Video": "مراجعة الأداء بالفيديو",
  "Monthly Video Call": "مكالمة فيديو شهرية",
  "Everything in Pro": "كل مميزات باقة Pro",
  "Priority 24/7 Access": "وصول أولوية ٢٤/٧",
  "Daily Video Check-ins": "متابعة يومية بالفيديو",
  "Competition Prep": "تحضير للبطولات",
  "Peak Week Protocol": "بروتوكول أسبوع الذروة",
  "Advanced Supplementation": "مكملات غذائية متقدمة",
  "Select Basic": "اختر الأساسي",
  "Select Pro": "اختر Pro",
  "Select Elite": "اختر Elite",
  "Most Popular": "الأكثر شيوعاً",
  "EGP / mo": "جنيه / شهر",

  // Testimonials
  "Lost 13kg in 8 weeks with Big Mahmed's program. The meal plan was surprisingly easy to follow. Life changing!":
    "خسرت ١٣ كيلو في ٨ أسابيع مع برنامج بيج محمد. خطة الأكل كانت سهلة بشكل مفاجئ. غيّرت حياتي!",
  "Gained serious muscle in 12 weeks. I was stuck at 55kg for years, now sitting comfortably at 70kg. The plan was perfect.":
    "اكتسبت عضلات حقيقية في ١٢ أسبوع. كنت عالقاً عند ٥٥ كيلو لسنوات، والآن وصلت بسهولة إلى ٧٠ كيلو. الخطة كانت مثالية.",
  "The daily WhatsApp support makes all the difference. Knowing coach is reviewing my form every day kept me pushing harder. Worth every penny!":
    "الدعم اليومي عبر واتساب يصنع الفرق. معرفتي بأن المدرب يراجع أدائي كل يوم جعلني أدفع أكثر. يستحق كل قرش!",
  "Finally found a coach who understands real results, not just empty promises. The recomp plan changed my entire physique.":
    "أخيراً وجدت مدرباً يفهم النتائج الحقيقية، لا مجرد وعود فارغة. خطة إعادة التشكيل غيّرت قوامي بالكامل.",

  // Lead Form
  "Ready to": "هل أنت مستعد",
  "Transform?": "للتحول؟",
  "Limited spots available. Fill out the form below and I'll build a personalized plan to get you to your goal.":
    "أماكن محدودة. املأ النموذج وسأبني لك خطة مخصصة لتحقيق هدفك.",
  "Full Name": "الاسم الكامل",
  "Age": "العمر",
  "Primary Goal": "الهدف الأساسي",
  "Select your goal...": "اختر هدفك...",
  "Fat Loss / Shred": "حرق الدهون",
  "Muscle Gain / Bulk": "بناء العضلات",
  "Body Recomposition": "إعادة تشكيل الجسم",
  "WhatsApp Number (with Country Code)": "رقم واتساب (مع رمز الدولة)",
  "Apply Now - Free Consultation": "قدّم الآن - استشارة مجانية",
  "Submitting...": "جارٍ الإرسال...",
  "You're In.": "أنت معنا.",
  "Your application has been received. I will review your details and contact you on WhatsApp shortly to discuss your custom plan.":
    "تم استلام طلبك. سأراجع تفاصيلك وأتواصل معك على واتساب قريباً لمناقشة خطتك المخصصة.",
  "Submit another application": "إرسال طلب آخر",
  "Name must be at least 2 characters": "يجب أن يكون الاسم حرفين على الأقل",
  "Age is required": "العمر مطلوب",
  "Please select a goal": "يرجى اختيار هدف",
  "Valid WhatsApp number required": "رقم واتساب صحيح مطلوب",

  // Final CTA
  "Stop": "لا",
  "Waiting.": "تنتظر.",
  "Start": "ابدأ",
  "Transforming.": "التحول.",
  "The time will pass anyway. You can either be exactly where you are right now, or you can be in the best shape of your life.":
    "الوقت سيمر على أي حال. يمكنك أن تبقى حيث أنت الآن، أو أن تكون في أفضل شكل في حياتك.",
  "Join Team Mahmed": "انضم لفريق بيج محمد",
  "Only 5 spots remaining": "فقط ٥ أماكن متبقية",

  // Footer
  "Results. Not Promises.": "نتائج. وليس وعوداً.",
  "All rights reserved.": "جميع الحقوق محفوظة.",
};

interface LanguageContextType {
  lang: Language;
  isArabic: boolean;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  isArabic: false,
  toggleLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "ar" : "en"));
  const isArabic = lang === "ar";

  const t = (key: string): string => {
    if (lang === "ar" && translations[key]) return translations[key];
    return key;
  };

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = isArabic ? "ar" : "en";
  }, [isArabic]);

  return (
    <LanguageContext.Provider value={{ lang, isArabic, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

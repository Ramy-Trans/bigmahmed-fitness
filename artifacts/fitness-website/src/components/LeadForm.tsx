import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";
import { useCreateLead } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export function LeadForm() {
  const { toast } = useToast();
  const { t, isArabic } = useLanguage();
  const [isSuccess, setIsSuccess] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t("Name must be at least 2 characters")),
    age: z.string().min(1, t("Age is required")),
    goal: z.string().min(1, t("Please select a goal")),
    whatsapp: z.string().min(8, t("Valid WhatsApp number required")),
  });

  type FormValues = z.infer<typeof formSchema>;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { mutate: createLead, isPending } = useCreateLead({
    mutation: {
      onSuccess: () => {
        setIsSuccess(true);
        reset();
        toast({
          title: isArabic ? "تم استلام طلبك!" : "Application Received!",
          description: isArabic
            ? "سيتواصل معك المدرب محمد على واتساب خلال ٢٤ ساعة."
            : "Coach Mahmed will contact you on WhatsApp within 24 hours.",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: isArabic ? "خطأ في الإرسال" : "Error submitting form",
          description: isArabic
            ? "يرجى المحاولة مجدداً أو التواصل عبر واتساب مباشرة."
            : "Please try again or contact us directly on WhatsApp.",
        });
      },
    },
  });

  const onSubmit = (data: FormValues) => {
    createLead({ data });
  };

  return (
    <section id="apply" className="py-20 sm:py-24 relative">
      <div className="absolute inset-0 bg-primary/5" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-7 sm:p-10 md:p-12 rounded-2xl border-primary/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

          {isSuccess ? (
            <div className="text-center py-14 sm:py-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </motion.div>
              <h3 className={`text-3xl sm:text-4xl font-display text-white mb-4 ${isArabic ? "font-arabic" : ""}`}>{t("You're In.")}</h3>
              <p className={`text-gray-300 text-base sm:text-lg mb-8 ${isArabic ? "font-arabic" : ""}`}>
                {t("Your application has been received. I will review your details and contact you on WhatsApp shortly to discuss your custom plan.")}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className={`text-primary hover:text-white transition-colors underline underline-offset-4 ${isArabic ? "font-arabic" : ""}`}
              >
                {t("Submit another application")}
              </button>
            </div>
          ) : (
            <>
              <div className={`text-center mb-8 sm:mb-10 ${isArabic ? "text-right sm:text-center" : ""}`}>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-display text-white mb-3 ${isArabic ? "font-arabic" : ""}`}>
                  {t("Ready to")} <span className="text-primary">{t("Transform?")}</span>
                </h2>
                <p className={`text-gray-300 text-sm sm:text-base ${isArabic ? "font-arabic" : ""}`}>
                  {t("Limited spots available. Fill out the form below and I'll build a personalized plan to get you to your goal.")}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6" dir={isArabic ? "rtl" : "ltr"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <label className={`text-sm font-semibold text-gray-300 uppercase tracking-wider ${isArabic ? "font-arabic" : ""}`}>
                      {t("Full Name")}
                    </label>
                    <input
                      {...register("name")}
                      className={`w-full bg-black/50 border ${errors.name ? "border-destructive" : "border-white/10"} focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white placeholder-gray-600 transition-all outline-none`}
                      placeholder={isArabic ? "محمد أحمد" : "John Doe"}
                    />
                    {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-semibold text-gray-300 uppercase tracking-wider ${isArabic ? "font-arabic" : ""}`}>
                      {t("Age")}
                    </label>
                    <input
                      type="number"
                      {...register("age")}
                      className={`w-full bg-black/50 border ${errors.age ? "border-destructive" : "border-white/10"} focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white placeholder-gray-600 transition-all outline-none`}
                      placeholder="25"
                    />
                    {errors.age && <p className="text-destructive text-xs">{errors.age.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-semibold text-gray-300 uppercase tracking-wider ${isArabic ? "font-arabic" : ""}`}>
                    {t("Primary Goal")}
                  </label>
                  <select
                    {...register("goal")}
                    className={`w-full bg-black/50 border ${errors.goal ? "border-destructive" : "border-white/10"} focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white transition-all outline-none appearance-none ${isArabic ? "font-arabic" : ""}`}
                  >
                    <option value="" disabled className="text-gray-500">{t("Select your goal...")}</option>
                    <option value="Fat Loss" className="bg-background text-white">{t("Fat Loss / Shred")}</option>
                    <option value="Muscle Gain" className="bg-background text-white">{t("Muscle Gain / Bulk")}</option>
                    <option value="Body Recomposition" className="bg-background text-white">{t("Body Recomposition")}</option>
                    <option value="Competition Prep" className="bg-background text-white">{t("Competition Prep")}</option>
                  </select>
                  {errors.goal && <p className="text-destructive text-xs">{errors.goal.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-semibold text-gray-300 uppercase tracking-wider ${isArabic ? "font-arabic" : ""}`}>
                    {t("WhatsApp Number (with Country Code)")}
                  </label>
                  <input
                    {...register("whatsapp")}
                    className={`w-full bg-black/50 border ${errors.whatsapp ? "border-destructive" : "border-white/10"} focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white placeholder-gray-600 transition-all outline-none`}
                    placeholder="+20 100 000 0000"
                    dir="ltr"
                  />
                  {errors.whatsapp && <p className="text-destructive text-xs">{errors.whatsapp.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className={`w-full btn-primary mt-2 flex justify-center items-center gap-2 ${isArabic ? "font-arabic" : ""}`}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {t("Submitting...")}
                    </>
                  ) : (
                    t("Apply Now - Free Consultation")
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

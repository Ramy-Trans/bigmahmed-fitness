import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";
import { useCreateLead } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, "Age is required"),
  goal: z.string().min(1, "Please select a goal"),
  whatsapp: z.string().min(8, "Valid WhatsApp number required"),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadForm() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { mutate: createLead, isPending } = useCreateLead({
    mutation: {
      onSuccess: () => {
        setIsSuccess(true);
        reset();
        toast({
          title: "Application Received!",
          description: "Coach Mahmed will contact you on WhatsApp within 24 hours.",
        });
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error submitting form",
          description: "Please try again or contact us directly on WhatsApp.",
        });
        console.error(error);
      }
    }
  });

  const onSubmit = (data: FormValues) => {
    createLead({ data });
  };

  return (
    <section id="apply" className="py-24 relative">
      <div className="absolute inset-0 bg-primary/5" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-2xl border-primary/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          
          {isSuccess ? (
            <div className="text-center py-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-primary" />
              </motion.div>
              <h3 className="text-4xl font-display text-white mb-4">You're In.</h3>
              <p className="text-gray-300 text-lg mb-8">
                Your application has been received. I will review your details and contact you on WhatsApp shortly to discuss your custom plan.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-primary hover:text-white transition-colors underline underline-offset-4"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
                  Ready to <span className="text-primary">Transform?</span>
                </h2>
                <p className="text-gray-300">
                  Limited spots available. Fill out the form below and I'll build a personalized plan to get you to your goal.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Full Name</label>
                    <input 
                      {...register("name")}
                      className={`w-full bg-black/50 border ${errors.name ? 'border-destructive' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white placeholder-gray-600 transition-all outline-none`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Age</label>
                    <input 
                      type="number"
                      {...register("age")}
                      className={`w-full bg-black/50 border ${errors.age ? 'border-destructive' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white placeholder-gray-600 transition-all outline-none`}
                      placeholder="25"
                    />
                    {errors.age && <p className="text-destructive text-xs">{errors.age.message}</p>}
                  </div>
                </div>

                {/* Goal */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Primary Goal</label>
                  <select 
                    {...register("goal")}
                    className={`w-full bg-black/50 border ${errors.goal ? 'border-destructive' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white transition-all outline-none appearance-none`}
                  >
                    <option value="" disabled className="text-gray-500">Select your goal...</option>
                    <option value="Fat Loss" className="bg-background text-white">Fat Loss / Shred</option>
                    <option value="Muscle Gain" className="bg-background text-white">Muscle Gain / Bulk</option>
                    <option value="Body Recomposition" className="bg-background text-white">Body Recomposition</option>
                    <option value="Competition Prep" className="bg-background text-white">Competition Prep</option>
                  </select>
                  {errors.goal && <p className="text-destructive text-xs">{errors.goal.message}</p>}
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">WhatsApp Number (with Country Code)</label>
                  <input 
                    {...register("whatsapp")}
                    className={`w-full bg-black/50 border ${errors.whatsapp ? 'border-destructive' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white placeholder-gray-600 transition-all outline-none`}
                    placeholder="+20 100 000 0000"
                  />
                  {errors.whatsapp && <p className="text-destructive text-xs">{errors.whatsapp.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full btn-primary mt-4 flex justify-center items-center"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Apply Now - Free Consultation"
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

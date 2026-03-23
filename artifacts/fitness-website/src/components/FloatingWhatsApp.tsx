import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/201000000000?text=I%20want%20to%20join%20your%20coaching%20program"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 group flex items-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-semibold px-0 group-hover:px-3">
        Chat with Coach
      </span>
    </a>
  );
}

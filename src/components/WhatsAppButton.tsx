import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/brand";

export function WhatsAppFAB() {
  return (
    <a
      href={whatsappUrl("Hi The Variety Nutrition, I'd like to know more about your products.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#1eb855] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </a>
  );
}

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/27000000000?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.5, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] text-foreground p-4 rounded-full shadow-lg whatsapp-pulse hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} fill="white" stroke="white" />
  </motion.a>
);

export default WhatsAppButton;

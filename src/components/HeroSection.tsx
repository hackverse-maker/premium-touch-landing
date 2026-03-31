import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Professional cleaning team at work"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-background/80" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
      >
        Professional Cleaning Services You Can Trust
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
      >
        Masters Touch{" "}
        <span className="gold-text">Services</span>
        <span className="block text-lg sm:text-xl md:text-2xl font-sans font-light text-muted-foreground mt-2">
          PTY LTD
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        Delivering excellence in residential and commercial cleaning across Sydney. Your space deserves the master's touch.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="gold-gradient text-primary-foreground font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg"
        >
          Get a Quote <ArrowRight size={20} />
        </a>
        <a
          href="tel:+61415883582"
          className="border border-primary/30 text-foreground font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors text-lg"
        >
          <Phone size={20} /> Call Us
        </a>
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1.5">
        <div className="w-1.5 h-2.5 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;

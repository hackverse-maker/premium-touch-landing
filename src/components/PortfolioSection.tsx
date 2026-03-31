import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const images = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jZJYCQlnpzcsLE7GlTlsonETKwbFPP.png", alt: "Kitchen and furniture product showcase" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 px-6 bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-2">Our Work</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Recent <span className="gold-text">Projects</span>
        </h2>
      </AnimatedSection>

      <div className="flex justify-center">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.1} className="w-full max-w-6xl">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity duration-700"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;

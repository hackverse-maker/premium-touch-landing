import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const images = [
  { src: p1, alt: "Commercial office deep cleaning result" },
  { src: p2, alt: "Building exterior maintenance" },
  { src: p3, alt: "Kitchen renovation project" },
  { src: p4, alt: "Industrial warehouse cleaning" },
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

      <div className="grid sm:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-300 flex items-center justify-center">
                <p className="text-foreground font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;

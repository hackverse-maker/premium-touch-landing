import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W39b11t2V6YOk3qaeGXQk97pmPjPCT.png",
    alt: "Shelving unit cleaning before and after",
    category: "Storage Solutions"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JUE7XZoyATSJle41LIMY0uWUNAnbvg.png",
    alt: "Kitchen and bathroom renovation projects",
    category: "Full Renovations"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cESpTS6spfyU5nilWccNIiPCe2dOWL.png",
    alt: "Oven and stove cleaning before and after",
    category: "Appliance Cleaning"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Noze9sSyxfldZbFujkyr8HD3HlHc8r.png",
    alt: "Room restoration with polished flooring",
    category: "Floor Restoration"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xp2iszKCqEZR6fgKd7zWn5aCtLEkeW.png",
    alt: "Skylight room with wooden flooring",
    category: "Light Restoration"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dXp5aAbqnFZtKP4NjfivQTMCDzprbU.png",
    alt: "Carpet cleaning before and after",
    category: "Carpet Cleaning"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9T5y2E6gGsMrTdCtSSv20CTNegv4Ip.png",
    alt: "Stove and cooktop deep cleaning",
    category: "Kitchen Cleaning"
  },
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-96"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                <p className="text-foreground font-display text-lg text-center">
                  {project.category}
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

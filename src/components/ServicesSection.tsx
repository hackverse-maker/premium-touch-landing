import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, Wrench, Settings } from "lucide-react";
import cleaningImg from "@/assets/service-cleaning.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import repairsImg from "@/assets/service-repairs.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    desc: "Deep cleaning, office cleaning, post-construction cleanup, and specialised sanitisation services for spotless environments.",
    img: cleaningImg,
  },
  {
    icon: Wrench,
    title: "Building Maintenance",
    desc: "Preventive and corrective maintenance for HVAC, plumbing, electrical systems, and general building upkeep.",
    img: maintenanceImg,
  },
  {
    icon: Settings,
    title: "Repairs & Installations",
    desc: "Expert repair work for commercial and residential properties, from minor fixes to full-scale renovations.",
    img: repairsImg,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6 bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-2">What We Do</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Our <span className="gold-text">Services</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-background/40" />
                <div className="absolute bottom-4 left-4 gold-gradient p-3 rounded-xl">
                  <s.icon size={24} className="text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

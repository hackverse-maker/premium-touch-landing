import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, Home, Building2, Briefcase, HardHat, Paintbrush } from "lucide-react";
import cleaningImg from "@/assets/service-cleaning.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import repairsImg from "@/assets/service-repairs.jpg";

const services = [
  {
    icon: Sparkles,
    title: "End Of Lease Cleaning",
    desc: "Comprehensive bond cleaning to ensure you get your full deposit back. We leave properties spotless and inspection-ready.",
    img: cleaningImg,
  },
  {
    icon: Home,
    title: "Pre Lease Cleaning",
    desc: "Deep cleaning for properties before new tenants move in. Fresh, sanitised, and welcoming spaces from day one.",
    img: maintenanceImg,
  },
  {
    icon: Paintbrush,
    title: "General Cleaning",
    desc: "Regular cleaning for homes and apartments. Dusting, mopping, vacuuming, and sanitising to keep your space pristine.",
    img: repairsImg,
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    desc: "Professional office cleaning services to maintain a healthy, productive work environment for your team.",
    img: cleaningImg,
  },
  {
    icon: Briefcase,
    title: "Commercial Cleaning",
    desc: "Large-scale cleaning solutions for retail spaces, warehouses, and commercial properties of any size.",
    img: maintenanceImg,
  },
  {
    icon: HardHat,
    title: "After Renovation Cleaning",
    desc: "Post-construction cleanup removing dust, debris, and residue so your newly renovated space shines.",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
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

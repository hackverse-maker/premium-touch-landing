import AnimatedSection from "./AnimatedSection";
import { ShieldCheck, Clock, Leaf, Star, Headphones, BadgeCheck } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully registered and insured for your peace of mind." },
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock service for emergencies and scheduled work." },
  { icon: Leaf, title: "Eco-Friendly", desc: "Green products and sustainable practices across all services." },
  { icon: Star, title: "Quality Guaranteed", desc: "We don't just meet expectations — we exceed them." },
  { icon: Headphones, title: "Dedicated Support", desc: "A personal account manager for every client." },
  { icon: BadgeCheck, title: "Vetted Professionals", desc: "Background-checked, trained, and experienced staff." },
];

const WhyChooseUsSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-2">Our Promise</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Why Choose <span className="gold-text">Us</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-6 flex gap-4 items-start hover:border-primary/30 transition-colors">
              <div className="gold-gradient p-3 rounded-xl shrink-0">
                <r.icon size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;

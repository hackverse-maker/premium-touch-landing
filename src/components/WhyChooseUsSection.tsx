import AnimatedSection from "./AnimatedSection";
import { Users, DollarSign, Clock, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Team", desc: "Skilled professionals with years of cleaning industry expertise." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates without compromising on quality." },
  { icon: Clock, title: "Reliable & On-Time", desc: "We show up when we say we will — every single time." },
  { icon: ShieldCheck, title: "Quality Guarantee", desc: "100% satisfaction guaranteed or we'll re-clean at no extra cost." },
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
              <div className="gold-gradient p-4 rounded-xl inline-block mb-4">
                <r.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;

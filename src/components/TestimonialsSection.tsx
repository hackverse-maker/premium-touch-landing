import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Office Manager, TechCorp",
    text: "Masters Touch transformed our office. The attention to detail is unmatched — every surface sparkles. Highly recommend their cleaning services.",
  },
  {
    name: "David Nkosi",
    role: "Property Manager",
    text: "We've been using their maintenance services for three years. Reliable, professional, and always on time. They treat our buildings like their own.",
  },
  {
    name: "Thandi Molefe",
    role: "Restaurant Owner",
    text: "After a burst pipe emergency, they were on-site within the hour. The repair was flawless and they even cleaned up after. Absolute lifesavers.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-2">Client Feedback</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          What Our Clients <span className="gold-text">Say</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

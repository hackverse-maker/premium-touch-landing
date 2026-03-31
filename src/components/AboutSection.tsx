import AnimatedSection from "./AnimatedSection";
import aboutImg from "@/assets/about-team.jpg";
import { Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "100%", label: "Satisfaction Rate" },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <AnimatedSection>
        <div className="relative">
          <img
            src={aboutImg}
            alt="Masters Touch Services professional team"
            className="rounded-2xl w-full object-cover shadow-2xl shadow-gold/10"
            loading="lazy"
            width={1024}
            height={768}
          />
          <div className="absolute -bottom-6 -right-6 gold-gradient rounded-2xl p-6 shadow-xl">
            <p className="text-primary-foreground font-display text-2xl font-bold">10+</p>
            <p className="text-primary-foreground/80 text-sm">Years of Trust</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-2">About Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Your Trusted Partner in{" "}
          <span className="gold-text">Property Care</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Masters Touch Services PTY LTD has been providing premium cleaning, maintenance, and repair solutions for over a decade. We serve commercial and residential clients with unwavering dedication to quality.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Our trained professionals use industry-leading equipment and eco-friendly products to deliver results that exceed expectations — every single time.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-4 text-center">
              <s.icon className="text-primary mx-auto mb-2" size={24} />
              <p className="font-display text-xl font-bold text-foreground">{s.value}</p>
              <p className="text-muted-foreground text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;

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
            className="rounded-2xl w-full object-cover shadow-2xl shadow-primary/10"
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
          <span className="gold-text">Professional Cleaning</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We provide professional cleaning services across residential and commercial spaces in Sydney. Our experienced and reliable team ensures every job is done to the highest standard.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          With attention to detail and a commitment to quality, Masters Touch Services delivers spotless results — from end-of-lease cleans to ongoing office maintenance.
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

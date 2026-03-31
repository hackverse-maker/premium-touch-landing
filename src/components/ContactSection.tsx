import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { Phone, Mail, MapPin, Send, Loader2, Clock, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-2">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Contact <span className="gold-text">Us</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={5}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="gold-gradient text-primary-foreground font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 w-full justify-center"
              >
                {loading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Reach out to us for a free consultation and quote. We respond promptly.
                </p>
              </div>

              <div className="space-y-5">
                <a href="tel:+61415883582" className="flex items-center gap-4 group">
                  <div className="gold-gradient p-3 rounded-xl">
                    <Phone size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Mobile</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">+61 415 883 582</p>
                  </div>
                </a>

                <a href="tel:+61452419789" className="flex items-center gap-4 group">
                  <div className="gold-gradient p-3 rounded-xl">
                    <Phone size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cleaning Service</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">+61 452 419 789</p>
                  </div>
                </a>

                <a href="mailto:Themasterstouchservices112@gmail.com" className="flex items-center gap-4 group">
                  <div className="gold-gradient p-3 rounded-xl">
                    <Mail size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground group-hover:text-primary transition-colors text-sm">Themasterstouchservices112@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="gold-gradient p-3 rounded-xl">
                    <MapPin size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="text-foreground text-sm">Hebe St, Greenacre NSW 2190, Sydney, Australia</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="gold-gradient p-3 rounded-xl">
                    <Clock size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="text-foreground">Always Open</p>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/Masterstouchservices112?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="gold-gradient p-3 rounded-xl">
                    <Facebook size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Facebook</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">Follow us on Facebook</p>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

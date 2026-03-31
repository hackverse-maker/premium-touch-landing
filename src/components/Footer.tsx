import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-display text-lg font-bold">
          <span className="gold-text">Masters Touch</span>{" "}
          <span className="text-muted-foreground text-sm font-sans font-light">Services PTY LTD</span>
        </p>
        <p className="text-muted-foreground text-xs mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>

      <div className="flex items-center gap-6">
        {[
          { label: "Home", href: "#home" },
          { label: "Services", href: "#services" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "Contact", href: "#contact" },
        ].map((l) => (
          <a key={l.href} href={l.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {[Facebook, Instagram, Linkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Social link"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

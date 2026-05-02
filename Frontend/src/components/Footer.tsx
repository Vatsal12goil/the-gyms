import { Link } from "@tanstack/react-router";
import {
  Dumbbell,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Classes", to: "/classes" },
    { label: "Expert Trainers", to: "/trainers" },
  ],
  Membership: [
    { label: "Plans & Pricing", to: "/membership" },
    { label: "Join Now", to: "/membership" },
    { label: "Refer a Friend", to: "/contact" },
    { label: "Corporate Plans", to: "/contact" },
  ],
  Community: [
    { label: "Success Stories", to: "/testimonials" },
    { label: "Blog & Insights", to: "/blog" },
    { label: "Contact Us", to: "/contact" },
    { label: "Careers", to: "/contact" },
  ],
} as const;

const social = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "thegyms.in";

  return (
    <footer className="bg-card border-t border-border">
      {/* CTA strip */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-black text-xl text-primary-foreground tracking-wider uppercase">
              Ready to Transform?
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Join 2,000+ members already crushing their goals at The Gyms.
            </p>
          </div>
          <Link
            to="/membership"
            data-ocid="footer.cta_button"
            className="px-8 py-3 bg-foreground text-background font-display font-black text-sm tracking-widest uppercase hover:bg-secondary hover:text-background transition-smooth whitespace-nowrap"
          >
            View Plans — Starting ₹1,499
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary flex items-center justify-center font-display font-black text-sm text-primary-foreground">
                TG
              </div>
              <span className="font-display font-black text-xl tracking-wider text-foreground">
                THE GYMS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              India's premier fitness destination. We don't just build bodies —
              we forge champions. Premium equipment, world-class trainers, and a
              culture of excellence.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-foreground transition-smooth"
              >
                <Phone size={14} className="text-primary" />
                +91 98765 43210
              </a>
              <a
                href="mailto:info@thegyms.in"
                className="flex items-center gap-2 hover:text-foreground transition-smooth"
              >
                <Mail size={14} className="text-primary" />
                info@thegyms.in
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                12, Fitness Avenue, Koramangala, Bengaluru — 560034
              </span>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-border text-muted-foreground hover:text-secondary hover:border-secondary transition-smooth"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-display font-bold text-xs tracking-widest text-secondary uppercase mb-4">
                {title}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Dumbbell size={12} className="text-primary" />
            <span>© {year} The Gyms. All rights reserved.</span>
          </div>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Menu, Phone, X, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Classes", to: "/classes" },
  { label: "Trainers", to: "/trainers" },
  { label: "Membership", to: "/membership" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prevPathRef = useRef(pathname);
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setIsOpen(false);
    }
  });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 bg-card border-b border-border/50 text-xs text-muted-foreground">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone size={11} className="text-primary" />
            +91 98765 43210
          </span>
          <span>Open Mon–Sat: 5am–11pm | Sun: 6am–8pm</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-secondary transition-smooth"
          >
            <Instagram size={13} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-secondary transition-smooth"
          >
            <Youtube size={13} />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-smooth ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-elevated"
            : "bg-card border-b border-border/60"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="navbar.logo"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-primary flex items-center justify-center font-display font-black text-sm text-primary-foreground rotate-0 group-hover:rotate-3 transition-smooth">
              TG
            </div>
            <span className="font-display font-black text-xl tracking-wider text-foreground group-hover:text-primary transition-smooth">
              THE GYMS
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  data-ocid={`navbar.link.${link.label.toLowerCase()}`}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-smooth ${
                    isActive(link.to)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/membership"
              data-ocid="navbar.join_cta"
              className="hidden sm:flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-display font-bold text-sm tracking-wider uppercase hover:bg-primary/90 transition-smooth"
            >
              Join Now
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              data-ocid="navbar.hamburger"
              className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="bg-card border-t border-border/50 px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`navbar.mobile.${link.label.toLowerCase()}`}
                className={`px-4 py-3 text-sm font-medium tracking-wide transition-smooth border-l-2 ${
                  isActive(link.to)
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/membership"
              data-ocid="navbar.mobile.join_cta"
              className="mt-3 px-4 py-3 bg-primary text-primary-foreground font-display font-bold text-sm tracking-wider uppercase text-center"
            >
              Join Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

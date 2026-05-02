import { Link } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import testimonialsData from "../data/testimonials.json";
import type { Testimonial } from "../types";

const testimonials = testimonialsData as Testimonial[];

const stats = [
  { value: "4.9/5", label: "Average Rating", sub: "Across 850+ reviews" },
  { value: "94%", label: "Retention Rate", sub: "Members renewing annually" },
  { value: "87%", label: "Hit Their Goals", sub: "Within first 6 months" },
  { value: "2,000+", label: "Active Members", sub: "And growing daily" },
];

export default function Testimonials() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-main.dim_1920x1080.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
            Proof Is in the Results
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-foreground">
            Success Stories
          </h1>
        </div>
      </section>

      {/* Stats */}
      <section className="section-darker py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-ocid={`testimonials.stat.item.${i + 1}`}
                className="bg-card border border-border px-6 py-8 text-center"
              >
                <p className="font-display font-black text-3xl text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
              Real People, Real Results
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
              What Our Members Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                data-ocid={`testimonials.item.${i + 1}`}
                className="bg-card border border-border p-6 flex flex-col gap-5 card-elevated hover:border-primary/30 transition-smooth"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-0.5">
                    {Array.from(
                      { length: t.rating },
                      (_, j) => `star-${t.id}-${j}`,
                    ).map((k) => (
                      <Star
                        key={k}
                        size={14}
                        className="text-secondary fill-secondary"
                      />
                    ))}
                  </div>
                  <Quote
                    size={24}
                    className="text-primary/20 shrink-0 -mt-1"
                    fill="currentColor"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{t.review}"
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-xs text-primary font-display font-bold tracking-wide mb-3">
                    {t.result}
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 object-cover object-top"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.plan} Member · since {t.memberSince}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-darker py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-foreground mb-4">
            Your Story Starts Here
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of members who transformed their lives at The Gyms.
            The only difference between you and them? They started.
          </p>
          <Link
            to="/membership"
            data-ocid="testimonials.join_cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth"
          >
            Start Your Journey <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

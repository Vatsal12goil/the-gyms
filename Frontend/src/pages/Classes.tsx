import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Users } from "lucide-react";
import { useState } from "react";
import classesData from "../data/classes.json";
import type { GymClass } from "../types";

const classes = classesData as GymClass[];

const categories = [
  "All",
  "Conditioning",
  "Mind-Body",
  "Combat",
  "Cardio",
  "Strength",
  "Functional",
];

const difficultyColors: Record<string, string> = {
  Beginner: "text-secondary bg-secondary/10 border-secondary/30",
  Intermediate: "text-primary bg-primary/10 border-primary/30",
  Advanced: "text-foreground bg-muted border-border",
  "All Levels": "text-muted-foreground bg-muted border-border",
};

export default function Classes() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? classes
      : classes.filter((c) => c.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/classes-hiit.dim_900x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
            Train With Purpose
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-foreground">
            Our Classes
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section className="section-darker py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div
            className="flex flex-wrap gap-2 mb-10"
            data-ocid="classes.filter"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                data-ocid={`classes.filter.${cat.toLowerCase().replace(/\s+/g, "_")}`}
                className={`px-4 py-2 text-xs font-display font-bold tracking-widest uppercase transition-smooth border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cls, i) => (
              <div
                key={cls.id}
                data-ocid={`classes.item.${i + 1}`}
                className="bg-card border border-border overflow-hidden hover:border-primary/40 transition-smooth group card-elevated"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2.5 py-1 text-xs font-display font-bold tracking-wide uppercase border ${difficultyColors[cls.difficulty]}`}
                    >
                      {cls.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-secondary font-display tracking-wide uppercase">
                    {cls.category}
                  </span>
                  <h3 className="font-display font-black text-xl uppercase text-foreground mt-1 mb-3 group-hover:text-primary transition-smooth">
                    {cls.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {cls.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-primary" />
                      {cls.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={12} className="text-primary" />
                      {cls.capacity} max
                    </span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-foreground mb-2">
                      Schedule
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cls.schedule.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Instructor:{" "}
                    <span className="text-secondary font-semibold">
                      {cls.instructor}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-foreground mb-4">
            Book Your First Class
          </h2>
          <p className="text-muted-foreground mb-8">
            All group classes are included in Warrior and Elite memberships.
            Start today with a free trial session.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/membership"
              data-ocid="classes.join_cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth"
            >
              Get Membership <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              data-ocid="classes.trial_cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-bold tracking-wider uppercase hover:border-foreground transition-smooth"
            >
              Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

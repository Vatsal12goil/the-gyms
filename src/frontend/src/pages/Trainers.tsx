import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";
import trainersData from "../data/trainers.json";
import type { Trainer } from "../types";

const trainers = trainersData as Trainer[];

export default function Trainers() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/trainer-arjun.dim_600x700.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
            World-Class Coaching
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-foreground">
            Our Trainers
          </h1>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section-darker py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainers.map((trainer, i) => (
              <div
                key={trainer.id}
                data-ocid={`trainers.item.${i + 1}`}
                className="bg-card border border-border overflow-hidden hover:border-primary/40 transition-smooth group flex flex-col md:flex-row"
              >
                <div className="w-full md:w-56 shrink-0 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-64 md:h-full object-cover object-top transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div>
                    <p className="text-xs text-secondary font-display tracking-widest uppercase mb-1">
                      {trainer.role}
                    </p>
                    <h3 className="font-display font-black text-2xl uppercase text-foreground group-hover:text-primary transition-smooth mb-2">
                      {trainer.name}
                    </h3>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground mb-4">
                    <span>
                      <span className="text-foreground font-bold">
                        {trainer.experience}
                      </span>{" "}
                      Experience
                    </span>
                    <span>
                      <span className="text-foreground font-bold">
                        {trainer.clients}+
                      </span>{" "}
                      Clients
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {trainer.bio}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Specializations
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialization.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/20"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Certifications
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.certifications.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2 py-0.5 bg-muted text-muted-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  {trainer.instagram && (
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-display">
                        {trainer.instagram}
                      </span>
                      <a
                        href={`https://instagram.com/${trainer.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${trainer.name} Instagram`}
                        className="p-2 border border-border text-muted-foreground hover:text-secondary hover:border-secondary transition-smooth"
                      >
                        <Instagram size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-dark py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-foreground mb-4">
            Train With the Best
          </h2>
          <p className="text-muted-foreground mb-8">
            Personal training sessions with our coaches are available in Warrior
            and Elite memberships.
          </p>
          <Link
            to="/membership"
            data-ocid="trainers.join_cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

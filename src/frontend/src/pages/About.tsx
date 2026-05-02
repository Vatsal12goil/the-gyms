import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Every program, every trainer, every piece of equipment — selected to maximize your results. We don't do mediocre.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "From our imported equipment to our certified coaches, we maintain the highest standards in Indian fitness.",
  },
  {
    icon: Heart,
    title: "Community First",
    desc: "Behind the premium experience is a community that genuinely cares. Our members motivate each other daily.",
  },
  {
    icon: Zap,
    title: "Science-Backed",
    desc: "Our programs are built on current sports science, not trends. Evidence-based training gets sustainable results.",
  },
];

const milestones = [
  {
    year: "2012",
    event: "Founded in Koramangala, Bengaluru with 400 sq ft and 50 members.",
  },
  {
    year: "2015",
    event:
      "Expanded to flagship 10,000 sq ft facility. Introduced personal training program.",
  },
  {
    year: "2018",
    event:
      "Launched group fitness studio. Introduced boxing, yoga, and HIIT classes.",
  },
  {
    year: "2021",
    event:
      "Crossed 1,000 active members. Launched nutrition counseling program.",
  },
  {
    year: "2024",
    event: "Opened second location in Indiranagar. 2,000+ members strong.",
  },
  {
    year: "2026",
    event:
      "Expanding to 5 cities across India. India's fastest growing premium gym.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/about-gym.dim_1200x700.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
            Who We Are
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-foreground">
            Our Story
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
              Our Mission
            </p>
            <h2 className="font-display font-black text-4xl uppercase text-foreground mb-6">
              Redefining Indian Fitness
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              The Gyms was founded in 2012 with one conviction: Indian fitness
              enthusiasts deserve world-class training infrastructure. Not
              second rate equipment, not undertrained coaches — but the real
              thing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              We built The Gyms from 50 members in a tiny Koramangala basement
              to India's most respected premium fitness brand. Every decision
              since day one has been made with a single question: "Does this
              make our members better?"
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, with 2,000+ members and 15+ certified trainers, we're just
              getting started. India is waking up to what true fitness culture
              looks like, and we intend to lead that movement.
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/generated/gym-interior.dim_1200x800.jpg"
              alt="The Gyms facility"
              className="w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6">
              <p className="font-display font-black text-4xl text-primary">
                2,000+
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                Members Transformed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-darker py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
              What Drives Us
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                data-ocid={`about.value.item.${i + 1}`}
                className="bg-card border border-border p-6 hover:border-primary/40 transition-smooth group"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-smooth">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg uppercase text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
              Where We've Been
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  data-ocid={`about.milestone.item.${i + 1}`}
                  className="flex gap-8 items-start"
                >
                  <div className="w-32 shrink-0 relative hidden md:block">
                    <span className="font-display font-black text-primary text-lg">
                      {m.year}
                    </span>
                    <div className="absolute right-0 top-2 w-3 h-3 bg-primary border-2 border-background translate-x-1.5" />
                  </div>
                  <div className="bg-card border border-border p-5 flex-1">
                    <span className="font-display text-primary text-sm font-bold md:hidden">
                      {m.year}
                    </span>
                    <p className="text-sm text-foreground leading-relaxed mt-1">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-darker py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-foreground mb-4">
            Be Part of the Story
          </h2>
          <p className="text-muted-foreground mb-8">
            Join 2,000+ members who chose excellence. Your chapter starts today.
          </p>
          <Link
            to="/membership"
            data-ocid="about.join_cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth"
          >
            Join The Gyms <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

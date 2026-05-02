import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Flame,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import blogsData from "../data/blogs.json";
import classesData from "../data/classes.json";
import testimonialsData from "../data/testimonials.json";
import type { BlogPost, GymClass, Testimonial } from "../types";

const blogs = blogsData as BlogPost[];
const testimonials = testimonialsData as Testimonial[];
const classes = classesData as GymClass[];

const stats = [
  { value: "2,000+", label: "Active Members", icon: Users },
  { value: "15+", label: "Expert Trainers", icon: Trophy },
  { value: "30+", label: "Weekly Classes", icon: Flame },
  { value: "24/7", label: "Gym Access", icon: Clock },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-main.dim_1920x1080.jpg')",
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-secondary/40 bg-secondary/10 text-secondary text-xs font-display tracking-widest uppercase mb-6">
              <Star size={10} fill="currentColor" />
              India's #1 Premium Gym Network
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight text-foreground uppercase mb-6">
              Forge Your{" "}
              <span className="text-gradient-red block">Legacy.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              India's most elite fitness destination. Premium equipment,
              world-class trainers, and a community that pushes you beyond every
              limit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/membership"
                data-ocid="home.hero_join_button"
                className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-base tracking-wider uppercase hover:bg-primary/90 transition-smooth red-glow"
              >
                Join Now — From ₹1,499
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/classes"
                data-ocid="home.hero_classes_button"
                className="flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-bold text-base tracking-wider uppercase hover:border-secondary hover:text-secondary transition-smooth"
              >
                View Classes
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-card/90 backdrop-blur-md px-6 py-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-black text-xl text-foreground leading-tight">
                      {value}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classes preview */}
      <section className="section-darker py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-secondary text-xs font-display tracking-widest uppercase mb-2">
                What We Offer
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
                Elite Classes
              </h2>
            </div>
            <Link
              to="/classes"
              data-ocid="home.classes_see_all"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              See All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.slice(0, 3).map((cls, i) => (
              <Link
                key={cls.id}
                to="/classes"
                data-ocid={`home.class.item.${i + 1}`}
                className="group relative overflow-hidden aspect-[4/3] block"
              >
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span
                    className={`inline-block px-2 py-0.5 text-xs font-display tracking-wider uppercase mb-2 ${
                      cls.difficulty === "Beginner"
                        ? "bg-secondary/20 text-secondary"
                        : cls.difficulty === "Advanced"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {cls.difficulty}
                  </span>
                  <p className="font-display font-black text-xl text-foreground uppercase group-hover:text-primary transition-smooth">
                    {cls.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cls.duration} · {cls.instructor}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/assets/generated/gym-interior.dim_1200x800.jpg"
                alt="The Gyms interior"
                className="w-full object-cover aspect-video"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary px-6 py-4">
                <p className="font-display font-black text-3xl text-primary-foreground">
                  12+
                </p>
                <p className="text-xs text-primary-foreground/80 uppercase tracking-wide">
                  Years of Excellence
                </p>
              </div>
            </div>
            <div>
              <p className="text-secondary text-xs font-display tracking-widest uppercase mb-2">
                Our Story
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground mb-6">
                Built for <span className="text-gradient-red">Champions</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Gyms was founded with a single vision: bring world-class
                fitness infrastructure to India. From our first location in
                Bengaluru, we've grown to become the country's most respected
                premium gym brand — trusted by athletes, executives, and
                fitness-first individuals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every machine, every program, every trainer — selected with
                obsessive attention to quality. We don't follow trends. We set
                standards.
              </p>
              <Link
                to="/about"
                data-ocid="home.about_link"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-display font-bold text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="section-darker py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-secondary text-xs font-display tracking-widest uppercase mb-2">
                Real Results
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
                Members Speak
              </h2>
            </div>
            <Link
              to="/testimonials"
              data-ocid="home.testimonials_see_all"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              All Stories <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={t.id}
                data-ocid={`home.testimonial.item.${i + 1}`}
                className="bg-card border border-border p-6 flex flex-col gap-4 card-elevated"
              >
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
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{t.review}"
                </p>
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 object-cover object-top"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-primary font-display">
                      {t.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest blog */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-secondary text-xs font-display tracking-widest uppercase mb-2">
                Knowledge Hub
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
                Latest Insights
              </h2>
            </div>
            <Link
              to="/blog"
              data-ocid="home.blog_see_all"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              All Posts <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogs.slice(0, 3).map((post, i) => (
              <Link
                key={post.id}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                data-ocid={`home.blog.item.${i + 1}`}
                className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-smooth"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-secondary font-display tracking-wide uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground mt-2 mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {post.author} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/about-gym.dim_1200x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-secondary text-xs font-display tracking-widest uppercase mb-4">
            Your Time Is Now
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-foreground mb-6">
            Start Your <span className="text-gradient-red">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Memberships starting at just ₹1,499/month. No excuses. Just results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/membership"
              data-ocid="home.cta_join_button"
              className="px-10 py-4 bg-primary text-primary-foreground font-display font-black text-base tracking-widest uppercase hover:bg-primary/90 transition-smooth red-glow"
            >
              View Memberships
            </Link>
            <Link
              to="/contact"
              data-ocid="home.cta_contact_button"
              className="px-10 py-4 border border-border text-foreground font-display font-bold text-base tracking-wider uppercase hover:border-foreground transition-smooth"
            >
              Get Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

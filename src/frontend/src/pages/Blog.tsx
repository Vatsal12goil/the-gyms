import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import blogsData from "../data/blogs.json";
import type { BlogPost } from "../types";

const blogs = blogsData as BlogPost[];

const categories = ["All", "Training", "Nutrition", "Cardio", "Wellness"];

export default function Blog() {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/gym-interior.dim_1200x800.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-background/78" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
            Knowledge Is Strength
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-foreground">
            The Blog
          </h1>
        </div>
      </section>

      <section className="section-darker py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Featured post */}
          <div className="mb-14">
            <p className="text-secondary text-xs font-display tracking-widest uppercase mb-6">
              Featured Article
            </p>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              data-ocid="blog.featured_post"
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border overflow-hidden hover:border-primary/40 transition-smooth"
            >
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-display tracking-wide uppercase border border-primary/20">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={11} />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-display font-black text-2xl md:text-3xl uppercase text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {featured.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={featured.authorAvatar}
                    alt={featured.author}
                    className="w-9 h-9 object-cover object-top"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {featured.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(featured.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 text-xs font-display font-bold tracking-widest uppercase border border-border text-muted-foreground"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Link
                key={post.id}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                data-ocid={`blog.post.item.${i + 1}`}
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-display tracking-wide uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base uppercase text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="pt-3 border-t border-border flex items-center gap-2">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-7 h-7 object-cover object-top"
                    />
                    <span className="text-xs text-muted-foreground">
                      {post.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import blogsData from "../data/blogs.json";
import type { BlogPost } from "../types";

const blogs = blogsData as BlogPost[];

export default function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = blogs.find((b) => b.slug === slug);
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="section-darker min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="font-display font-black text-6xl text-primary mb-4">
          404
        </p>
        <p className="text-xl text-foreground mb-2 font-display uppercase">
          Post Not Found
        </p>
        <p className="text-muted-foreground mb-6">
          This article may have been moved or removed.
        </p>
        <Link
          to="/blog"
          data-ocid="blogpost.back_to_blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.coverImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 md:px-8 pb-10">
          <Link
            to="/blog"
            data-ocid="blogpost.back_link"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-smooth mb-4"
          >
            <ArrowLeft size={13} /> All Posts
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-display tracking-wide uppercase border border-primary/20">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>
          <h1 className="font-display font-black text-3xl md:text-4xl uppercase text-foreground">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-darker py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main content */}
          <article className="lg:col-span-3">
            <div className="flex items-center gap-4 pb-6 border-b border-border mb-8">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-12 h-12 object-cover object-top"
              />
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-medium border-l-2 border-primary pl-4">
              {post.excerpt}
            </p>

            <div className="prose prose-invert max-w-none">
              {post.content.split("\n\n").map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-muted-foreground leading-relaxed mb-6 text-base"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mt-10 pt-6 border-t border-border">
              <Tag size={14} className="text-muted-foreground" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-muted text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <p className="font-display font-bold text-xs tracking-widest text-secondary uppercase mb-5">
                More Articles
              </p>
              <div className="flex flex-col gap-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to="/blog/$slug"
                    params={{ slug: r.slug }}
                    data-ocid={`blogpost.related.${r.id}`}
                    className="group flex gap-3"
                  >
                    <img
                      src={r.coverImage}
                      alt={r.title}
                      className="w-16 h-12 object-cover shrink-0"
                    />
                    <div>
                      <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2 leading-snug">
                        {r.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {r.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 bg-card border border-border p-5">
                <p className="font-display font-bold text-sm uppercase text-foreground mb-3">
                  Ready to Apply This?
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Our trainers will help you put this knowledge into practice.
                </p>
                <Link
                  to="/membership"
                  data-ocid="blogpost.sidebar_cta"
                  className="block w-full text-center py-2.5 bg-primary text-primary-foreground font-display font-bold text-xs tracking-wider uppercase hover:bg-primary/90 transition-smooth"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

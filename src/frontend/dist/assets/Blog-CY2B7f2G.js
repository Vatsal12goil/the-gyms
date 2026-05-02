import { j as jsxRuntimeExports, L as Link } from "./index-DzByOr0V.js";
import { b as blogsData } from "./blogs-CX3biqOy.js";
import { C as Clock } from "./clock-D6q3ay0j.js";
const blogs = blogsData;
const categories = ["All", "Training", "Nutrition", "Cardio", "Wellness"];
function Blog() {
  const featured = blogs[0];
  const rest = blogs.slice(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-72 flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage: "url('/assets/generated/gym-interior.dim_1200x800.jpg')"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/78" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "Knowledge Is Strength" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-5xl md:text-6xl uppercase text-foreground", children: "The Blog" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-6", children: "Featured Article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog/$slug",
            params: { slug: featured.slug },
            "data-ocid": "blog.featured_post",
            className: "group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border overflow-hidden hover:border-primary/40 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video lg:aspect-auto overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: featured.coverImage,
                  alt: featured.title,
                  className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 bg-primary/10 text-primary text-xs font-display tracking-wide uppercase border border-primary/20", children: featured.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
                    featured.readTime
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-2xl md:text-3xl uppercase text-foreground mb-4 group-hover:text-primary transition-smooth", children: featured.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", children: featured.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: featured.authorAvatar,
                      alt: featured.author,
                      className: "w-9 h-9 object-cover object-top"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: featured.author }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: new Date(featured.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    }) })
                  ] })
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-10", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "px-4 py-1.5 text-xs font-display font-bold tracking-widest uppercase border border-border text-muted-foreground",
          children: cat
        },
        cat
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: rest.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog/$slug",
          params: { slug: post.slug },
          "data-ocid": `blog.post.item.${i + 1}`,
          className: "group bg-card border border-border overflow-hidden hover:border-primary/40 transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: post.coverImage,
                alt: post.title,
                className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-muted text-muted-foreground text-xs font-display tracking-wide uppercase", children: post.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
                  post.readTime
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base uppercase text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2", children: post.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4", children: post.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-border flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: post.authorAvatar,
                    alt: post.author,
                    className: "w-7 h-7 object-cover object-top"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: post.author })
              ] })
            ] })
          ]
        },
        post.id
      )) })
    ] }) })
  ] });
}
export {
  Blog as default
};

import { c as createLucideIcon, u as useParams, j as jsxRuntimeExports, L as Link } from "./index-DzByOr0V.js";
import { b as blogsData } from "./blogs-CX3biqOy.js";
import { C as Clock } from "./clock-D6q3ay0j.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const blogs = blogsData;
function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = blogs.find((b) => b.slug === slug);
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);
  if (!post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-darker min-h-[60vh] flex flex-col items-center justify-center text-center px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-6xl text-primary mb-4", children: "404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-foreground mb-2 font-display uppercase", children: "Post Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This article may have been moved or removed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog",
          "data-ocid": "blogpost.back_to_blog",
          className: "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
            " Back to Blog"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-80 flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: { backgroundImage: `url('${post.coverImage}')` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto w-full px-4 md:px-8 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            "data-ocid": "blogpost.back_link",
            className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-smooth mb-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 13 }),
              " All Posts"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 bg-primary/10 text-primary text-xs font-display tracking-wide uppercase border border-primary/20", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
            post.readTime
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl md:text-4xl uppercase text-foreground", children: post.title })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 pb-6 border-b border-border mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.authorAvatar,
              alt: post.author,
              className: "w-12 h-12 object-cover object-top"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: post.author }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-8 font-medium border-l-2 border-primary pl-4", children: post.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-invert max-w-none", children: post.content.split("\n\n").map((para) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-muted-foreground leading-relaxed mb-6 text-base",
            children: para
          },
          para.slice(0, 40)
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mt-10 pt-6 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 14, className: "text-muted-foreground" }),
          post.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs px-2.5 py-1 bg-muted text-muted-foreground border border-border",
              children: tag
            },
            tag
          ))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xs tracking-widest text-secondary uppercase mb-5", children: "More Articles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog/$slug",
            params: { slug: r.slug },
            "data-ocid": `blogpost.related.${r.id}`,
            className: "group flex gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: r.coverImage,
                  alt: r.title,
                  className: "w-16 h-12 object-cover shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2 leading-snug", children: r.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: r.readTime })
              ] })
            ]
          },
          r.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 bg-card border border-border p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm uppercase text-foreground mb-3", children: "Ready to Apply This?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Our trainers will help you put this knowledge into practice." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/membership",
              "data-ocid": "blogpost.sidebar_cta",
              className: "block w-full text-center py-2.5 bg-primary text-primary-foreground font-display font-bold text-xs tracking-wider uppercase hover:bg-primary/90 transition-smooth",
              children: "Join Now"
            }
          )
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  BlogPostPage as default
};

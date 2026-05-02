import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-DzByOr0V.js";
import { b as blogsData } from "./blogs-CX3biqOy.js";
import { U as Users, c as classesData } from "./classes-BXoKJlax.js";
import { S as Star, t as testimonialsData } from "./testimonials-DdCDQAc1.js";
import { A as ArrowRight } from "./arrow-right-cHCxvTw0.js";
import { C as Clock } from "./clock-D6q3ay0j.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
const blogs = blogsData;
const testimonials = testimonialsData;
const classes = classesData;
const stats = [
  { value: "2,000+", label: "Active Members", icon: Users },
  { value: "15+", label: "Expert Trainers", icon: Trophy },
  { value: "30+", label: "Weekly Classes", icon: Flame },
  { value: "24/7", label: "Gym Access", icon: Clock }
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
          style: {
            backgroundImage: "url('/assets/generated/hero-main.dim_1920x1080.jpg')"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-gradient" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 border border-secondary/40 bg-secondary/10 text-secondary text-xs font-display tracking-widest uppercase mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, fill: "currentColor" }),
          "India's #1 Premium Gym Network"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight text-foreground uppercase mb-6", children: [
          "Forge Your",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red block", children: "Legacy." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg", children: "India's most elite fitness destination. Premium equipment, world-class trainers, and a community that pushes you beyond every limit." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/membership",
              "data-ocid": "home.hero_join_button",
              className: "flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-base tracking-wider uppercase hover:bg-primary/90 transition-smooth red-glow",
              children: [
                "Join Now — From ₹1,499",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/classes",
              "data-ocid": "home.hero_classes_button",
              className: "flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-bold text-base tracking-wider uppercase hover:border-secondary hover:text-secondary transition-smooth",
              children: "View Classes"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-border", children: stats.map(({ value, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card/90 backdrop-blur-md px-6 py-5 flex items-center gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-xl text-foreground leading-tight", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: label })
            ] })
          ]
        },
        label
      )) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-2", children: "What We Offer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl md:text-5xl uppercase text-foreground", children: "Elite Classes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/classes",
            "data-ocid": "home.classes_see_all",
            className: "hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth",
            children: [
              "See All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: classes.slice(0, 3).map((cls, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/classes",
          "data-ocid": `home.class.item.${i + 1}`,
          className: "group relative overflow-hidden aspect-[4/3] block",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: cls.image,
                alt: cls.name,
                className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block px-2 py-0.5 text-xs font-display tracking-wider uppercase mb-2 ${cls.difficulty === "Beginner" ? "bg-secondary/20 text-secondary" : cls.difficulty === "Advanced" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`,
                  children: cls.difficulty
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-xl text-foreground uppercase group-hover:text-primary transition-smooth", children: cls.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                cls.duration,
                " · ",
                cls.instructor
              ] })
            ] })
          ]
        },
        cls.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-dark py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/gym-interior.dim_1200x800.jpg",
            alt: "The Gyms interior",
            className: "w-full object-cover aspect-video"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-4 -right-4 bg-primary px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-3xl text-primary-foreground", children: "12+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/80 uppercase tracking-wide", children: "Years of Excellence" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-2", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl md:text-5xl uppercase text-foreground mb-6", children: [
          "Built for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "Champions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "The Gyms was founded with a single vision: bring world-class fitness infrastructure to India. From our first location in Bengaluru, we've grown to become the country's most respected premium gym brand — trusted by athletes, executives, and fitness-first individuals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8", children: "Every machine, every program, every trainer — selected with obsessive attention to quality. We don't follow trends. We set standards." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/about",
            "data-ocid": "home.about_link",
            className: "inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-display font-bold text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-smooth",
            children: [
              "Our Story ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-2", children: "Real Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl md:text-5xl uppercase text-foreground", children: "Members Speak" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/testimonials",
            "data-ocid": "home.testimonials_see_all",
            className: "hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth",
            children: [
              "All Stories ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: testimonials.slice(0, 3).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `home.testimonial.item.${i + 1}`,
          className: "bg-card border border-border p-6 flex flex-col gap-4 card-elevated",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from(
              { length: t.rating },
              (_, j) => `star-${t.id}-${j}`
            ).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                size: 14,
                className: "text-secondary fill-secondary"
              },
              k
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: [
              '"',
              t.review,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: t.avatar,
                  alt: t.name,
                  className: "w-10 h-10 object-cover object-top"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-display", children: t.result })
              ] })
            ] })
          ]
        },
        t.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-dark py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-2", children: "Knowledge Hub" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl md:text-5xl uppercase text-foreground", children: "Latest Insights" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            "data-ocid": "home.blog_see_all",
            className: "hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth",
            children: [
              "All Posts ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: blogs.slice(0, 3).map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog/$slug",
          params: { slug: post.slug },
          "data-ocid": `home.blog.item.${i + 1}`,
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-secondary font-display tracking-wide uppercase", children: post.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mt-2 mb-2 group-hover:text-primary transition-smooth line-clamp-2", children: post.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                post.author,
                " · ",
                post.readTime
              ] })
            ] })
          ]
        },
        post.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-28 overflow-hidden",
        style: {
          backgroundImage: "url('/assets/generated/about-gym.dim_1200x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/85" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto px-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-4", children: "Your Time Is Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-5xl md:text-6xl uppercase text-foreground mb-6", children: [
              "Start Your ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "Transformation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-10", children: "Memberships starting at just ₹1,499/month. No excuses. Just results." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/membership",
                  "data-ocid": "home.cta_join_button",
                  className: "px-10 py-4 bg-primary text-primary-foreground font-display font-black text-base tracking-widest uppercase hover:bg-primary/90 transition-smooth red-glow",
                  children: "View Memberships"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  "data-ocid": "home.cta_contact_button",
                  className: "px-10 py-4 border border-border text-foreground font-display font-bold text-base tracking-wider uppercase hover:border-foreground transition-smooth",
                  children: "Get Free Trial"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  Home as default
};

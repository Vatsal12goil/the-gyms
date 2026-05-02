import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-DzByOr0V.js";
import { t as testimonialsData, S as Star } from "./testimonials-DdCDQAc1.js";
import { A as ArrowRight } from "./arrow-right-cHCxvTw0.js";
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
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const testimonials = testimonialsData;
const stats = [
  { value: "4.9/5", label: "Average Rating", sub: "Across 850+ reviews" },
  { value: "94%", label: "Retention Rate", sub: "Members renewing annually" },
  { value: "87%", label: "Hit Their Goals", sub: "Within first 6 months" },
  { value: "2,000+", label: "Active Members", sub: "And growing daily" }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-72 flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage: "url('/assets/generated/hero-main.dim_1920x1080.jpg')"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "Proof Is in the Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-5xl md:text-6xl uppercase text-foreground", children: "Success Stories" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `testimonials.stat.item.${i + 1}`,
        className: "bg-card border border-border px-6 py-8 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-3xl text-primary mb-1", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: stat.sub })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-dark py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "Real People, Real Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl md:text-5xl uppercase text-foreground", children: "What Our Members Say" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `testimonials.item.${i + 1}`,
          className: "bg-card border border-border p-6 flex flex-col gap-5 card-elevated hover:border-primary/30 transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Quote,
                {
                  size: 24,
                  className: "text-primary/20 shrink-0 -mt-1",
                  fill: "currentColor"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: [
              '"',
              t.review,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-xs text-primary font-display font-bold tracking-wide mb-3", children: t.result }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: t.avatar,
                    alt: t.name,
                    className: "w-11 h-11 object-cover object-top"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    t.plan,
                    " Member · since ",
                    t.memberSince
                  ] })
                ] })
              ] })
            ] })
          ]
        },
        t.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl uppercase text-foreground mb-4", children: "Your Story Starts Here" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Join thousands of members who transformed their lives at The Gyms. The only difference between you and them? They started." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/membership",
          "data-ocid": "testimonials.join_cta",
          className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth",
          children: [
            "Start Your Journey ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  Testimonials as default
};

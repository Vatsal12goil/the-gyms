import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DzByOr0V.js";
import { c as classesData, U as Users } from "./classes-BXoKJlax.js";
import { C as Clock } from "./clock-D6q3ay0j.js";
import { A as ArrowRight } from "./arrow-right-cHCxvTw0.js";
const classes = classesData;
const categories = [
  "All",
  "Conditioning",
  "Mind-Body",
  "Combat",
  "Cardio",
  "Strength",
  "Functional"
];
const difficultyColors = {
  Beginner: "text-secondary bg-secondary/10 border-secondary/30",
  Intermediate: "text-primary bg-primary/10 border-primary/30",
  Advanced: "text-foreground bg-muted border-border",
  "All Levels": "text-muted-foreground bg-muted border-border"
};
function Classes() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = activeCategory === "All" ? classes : classes.filter((c) => c.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-72 flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage: "url('/assets/generated/classes-hiit.dim_900x600.jpg')"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/75" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "Train With Purpose" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-5xl md:text-6xl uppercase text-foreground", children: "Our Classes" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex flex-wrap gap-2 mb-10",
          "data-ocid": "classes.filter",
          children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(cat),
              "data-ocid": `classes.filter.${cat.toLowerCase().replace(/\s+/g, "_")}`,
              className: `px-4 py-2 text-xs font-display font-bold tracking-widest uppercase transition-smooth border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground"}`,
              children: cat
            },
            cat
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((cls, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `classes.item.${i + 1}`,
          className: "bg-card border border-border overflow-hidden hover:border-primary/40 transition-smooth group card-elevated",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video overflow-hidden relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: cls.image,
                  alt: cls.name,
                  className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `px-2.5 py-1 text-xs font-display font-bold tracking-wide uppercase border ${difficultyColors[cls.difficulty]}`,
                  children: cls.difficulty
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-secondary font-display tracking-wide uppercase", children: cls.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-xl uppercase text-foreground mt-1 mb-3 group-hover:text-primary transition-smooth", children: cls.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3", children: cls.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12, className: "text-primary" }),
                  cls.duration
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12, className: "text-primary" }),
                  cls.capacity,
                  " max"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2", children: "Schedule" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: cls.schedule.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs px-2 py-1 bg-muted text-muted-foreground",
                    children: s
                  },
                  s
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-3", children: [
                "Instructor:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary font-semibold", children: cls.instructor })
              ] })
            ] })
          ]
        },
        cls.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-dark py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl uppercase text-foreground mb-4", children: "Book Your First Class" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "All group classes are included in Warrior and Elite memberships. Start today with a free trial session." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/membership",
            "data-ocid": "classes.join_cta",
            className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth",
            children: [
              "Get Membership ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            "data-ocid": "classes.trial_cta",
            className: "inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-bold tracking-wider uppercase hover:border-foreground transition-smooth",
            children: "Free Trial"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  Classes as default
};

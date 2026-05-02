import { j as jsxRuntimeExports, I as Instagram, L as Link } from "./index-DzByOr0V.js";
import { A as ArrowRight } from "./arrow-right-cHCxvTw0.js";
const trainersData = [
  {
    id: "arjun",
    name: "Arjun Mehta",
    role: "Head Strength & Conditioning Coach",
    image: "/assets/generated/trainer-arjun.dim_600x700.jpg",
    specialization: [
      "Powerlifting",
      "Muscle Hypertrophy",
      "Sports Performance"
    ],
    experience: "12 Years",
    clients: 340,
    bio: "Former national-level powerlifter and NSCA-certified Strength & Conditioning Specialist. Arjun has transformed hundreds of ordinary individuals into extraordinary athletes. His evidence-based approach combines the latest sports science with practical, sustainable programming.",
    certifications: [
      "NSCA-CSCS",
      "ISSA Master Trainer",
      "ACE Personal Trainer",
      "Precision Nutrition L2"
    ],
    instagram: "@arjun_getstrong"
  },
  {
    id: "priya",
    name: "Priya Sharma",
    role: "Women's Fitness & Yoga Specialist",
    image: "/assets/generated/trainer-priya.dim_600x700.jpg",
    specialization: [
      "Women's Strength Training",
      "Yoga & Mobility",
      "Pre/Post Natal Fitness"
    ],
    experience: "9 Years",
    clients: 280,
    bio: "Priya pioneered women's strength training in the region at a time when it was largely misunderstood. A 500-hour RYT certified yoga instructor with deep expertise in functional movement, she brings a holistic mind-body approach to every client's journey.",
    certifications: [
      "RYT 500 Yoga Alliance",
      "ACSM Certified PT",
      "Precision Nutrition L1",
      "FMS Specialist"
    ],
    instagram: "@priya_strongyogi"
  },
  {
    id: "vikram",
    name: "Vikram Nair",
    role: "Boxing & HIIT Performance Coach",
    image: "/assets/generated/trainer-vikram.dim_600x700.jpg",
    specialization: [
      "Boxing",
      "HIIT & Metabolic Conditioning",
      "Combat Sports Fitness"
    ],
    experience: "11 Years",
    clients: 420,
    bio: "Ex-professional boxer with 6 national titles, Vikram channels his competitive fighting experience into high-performance fitness coaching. His signature Boxing Fundamentals and HIIT Knockout classes are consistently the most booked sessions at The Gyms.",
    certifications: [
      "BOXFIT India Certified",
      "NASM Performance Enhancement",
      "AIBA Coach Level 2",
      "TRX Suspension Training"
    ],
    instagram: "@vikram_knockout"
  },
  {
    id: "meera",
    name: "Meera Iyer",
    role: "Nutrition & Lifestyle Coach",
    image: "/assets/generated/trainer-priya.dim_600x700.jpg",
    specialization: [
      "Sports Nutrition",
      "Weight Management",
      "Indian Vegetarian Diets"
    ],
    experience: "7 Years",
    clients: 190,
    bio: "Registered Dietitian with a Master's in Sports Nutrition from SNDT University. Meera specializes in creating sustainable Indian diet plans that support athletic performance without sacrificing the cultural food practices that make eating a joy.",
    certifications: [
      "RD India Council",
      "Sports Dietitian ISSNF",
      "Precision Nutrition L2",
      "Diabetes Educator"
    ],
    instagram: "@meera_fuelright"
  }
];
const trainers = trainersData;
function Trainers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-72 flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage: "url('/assets/generated/trainer-arjun.dim_600x700.jpg')"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "World-Class Coaching" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-5xl md:text-6xl uppercase text-foreground", children: "Our Trainers" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: trainers.map((trainer, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `trainers.item.${i + 1}`,
        className: "bg-card border border-border overflow-hidden hover:border-primary/40 transition-smooth group flex flex-col md:flex-row",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-56 shrink-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: trainer.image,
              alt: trainer.name,
              className: "w-full h-64 md:h-full object-cover object-top transition-smooth group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-secondary font-display tracking-widest uppercase mb-1", children: trainer.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-2xl uppercase text-foreground group-hover:text-primary transition-smooth mb-2", children: trainer.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-xs text-muted-foreground mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: trainer.experience }),
                " ",
                "Experience"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
                  trainer.clients,
                  "+"
                ] }),
                " ",
                "Clients"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4 flex-1", children: trainer.bio }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2 uppercase tracking-wide", children: "Specializations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: trainer.specialization.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/20",
                  children: s
                },
                s
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2 uppercase tracking-wide", children: "Certifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: trainer.certifications.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-2 py-0.5 bg-muted text-muted-foreground",
                  children: c
                },
                c
              )) })
            ] }),
            trainer.instagram && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-display", children: trainer.instagram }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `https://instagram.com/${trainer.instagram.replace("@", "")}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `${trainer.name} Instagram`,
                  className: "p-2 border border-border text-muted-foreground hover:text-secondary hover:border-secondary transition-smooth",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 14 })
                }
              )
            ] })
          ] })
        ]
      },
      trainer.id
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-dark py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl uppercase text-foreground mb-4", children: "Train With the Best" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Personal training sessions with our coaches are available in Warrior and Elite memberships." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/membership",
          "data-ocid": "trainers.join_cta",
          className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth",
          children: [
            "Get Started ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  Trainers as default
};

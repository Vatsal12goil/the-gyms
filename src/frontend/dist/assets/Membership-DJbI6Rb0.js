import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, P as Phone } from "./index-DzByOr0V.js";
import { C as Check } from "./check-BGj_zr2g.js";
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: 1499,
    duration: "Monthly",
    popular: false,
    color: "standard",
    features: [
      "Access to gym floor (6am–10pm)",
      "Basic equipment usage",
      "2 group classes per month",
      "Locker room access",
      "Fitness assessment (1x)",
      "App access & workout tracking"
    ]
  },
  {
    id: "warrior",
    name: "Warrior",
    price: 2999,
    duration: "Monthly",
    popular: true,
    color: "gold",
    badge: "Most Popular",
    features: [
      "Unlimited gym access (24/7)",
      "All equipment & free weights",
      "Unlimited group classes",
      "1 Personal Training session/month",
      "Nutrition consultation (monthly)",
      "Locker + Towel service",
      "Priority class booking",
      "Guest pass (2x/month)"
    ]
  },
  {
    id: "elite",
    name: "Elite",
    price: 5999,
    duration: "Monthly",
    popular: false,
    color: "platinum",
    badge: "Premium",
    features: [
      "Everything in Warrior",
      "4 Personal Training sessions/month",
      "Custom meal plan by dietitian",
      "Monthly body composition analysis",
      "Unlimited spa & steam access",
      "Dedicated locker",
      "Unlimited guest passes",
      "Priority 1-on-1 trainer access",
      "Free merchandise pack"
    ]
  },
  {
    id: "quarterly-warrior",
    name: "Warrior Quarterly",
    price: 7999,
    duration: "3 Months",
    popular: false,
    color: "gold",
    badge: "Save 11%",
    features: [
      "Everything in Warrior plan",
      "3-month commitment discount",
      "Free supplement starter kit",
      "Progress photos every 30 days",
      "2 Personal Training sessions/month",
      "Nutrition consultation (weekly)"
    ]
  },
  {
    id: "annual-elite",
    name: "Elite Annual",
    price: 59999,
    duration: "12 Months",
    popular: false,
    color: "platinum",
    badge: "Best Value",
    features: [
      "Everything in Elite plan",
      "Annual commitment — save ₹11,989",
      "8 Personal Training sessions/month",
      "Complete body transformation program",
      "Professional progress photography",
      "Exclusive member events & workshops",
      "Free branded merchandise (full kit)",
      "Priority phone support"
    ]
  }
];
const plans = plansData;
const procedure = [
  {
    step: "01",
    title: "Choose Your Plan",
    desc: "Browse our membership tiers and select the plan that fits your fitness goals and budget."
  },
  {
    step: "02",
    title: "Free Gym Tour",
    desc: "Visit us anytime for a complimentary facility tour. See the equipment, meet the team, feel the energy."
  },
  {
    step: "03",
    title: "Health Assessment",
    desc: "Every new member gets a detailed fitness assessment with a certified trainer — no extra charge."
  },
  {
    step: "04",
    title: "Registration",
    desc: "Simple paperwork, photo ID, and your first payment. We're done in 15 minutes. No hidden fees ever."
  },
  {
    step: "05",
    title: "Onboarding Session",
    desc: "Your trainer walks you through the gym, sets your initial program, and answers every question."
  },
  {
    step: "06",
    title: "Train. Grow. Repeat.",
    desc: "Show up, put in the work, and let our community and trainers take care of the rest."
  }
];
const faqs = [
  {
    q: "Are there any joining fees?",
    a: "No hidden joining or registration fees. The price you see is the price you pay. Period."
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes. Members can freeze their membership for up to 30 days per year for medical reasons or travel. Contact our desk to arrange."
  },
  {
    q: "What documents do I need?",
    a: "Any government-issued photo ID (Aadhaar, PAN, Passport) and one passport-size photo. That's it."
  },
  {
    q: "Is personal training included?",
    a: "Warrior includes 1 PT session/month. Elite includes 4 PT sessions/month. Starter members can book PT at ₹800/session."
  },
  {
    q: "Can I switch between plans?",
    a: "Absolutely. Upgrade anytime — pay the difference pro-rated. Downgrade takes effect at the next billing cycle."
  }
];
const colorConfig = {
  standard: {
    border: "border-border",
    badge: "text-muted-foreground",
    highlight: false
  },
  gold: {
    border: "border-secondary/60",
    badge: "text-secondary bg-secondary/10 border-secondary/30",
    highlight: true
  },
  platinum: {
    border: "border-foreground/30",
    badge: "text-foreground bg-foreground/5 border-foreground/20",
    highlight: false
  }
};
function Membership() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-72 flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage: "url('/assets/generated/membership-card.dim_800x500.jpg')"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "Invest In Yourself" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-5xl md:text-6xl uppercase text-foreground", children: "Memberships" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "Choose Your Level" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl md:text-5xl uppercase text-foreground mb-4", children: "Membership Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Every plan includes access to world-class equipment, certified trainers, and a community that makes you better." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: plans.slice(0, 3).map((plan, i) => {
        const config = colorConfig[plan.color];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `membership.plan.item.${i + 1}`,
            className: `relative bg-card border ${config.border} p-6 flex flex-col ${config.highlight ? "shadow-gold-glow" : ""}`,
            children: [
              plan.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute -top-3 left-6 px-3 py-1 text-xs font-display font-bold tracking-widest uppercase border ${config.badge}`,
                  children: plan.badge
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-xs tracking-widest uppercase text-muted-foreground mb-1", children: plan.color === "standard" ? "Entry" : plan.color === "gold" ? "Premium" : "Elite" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-2xl uppercase text-foreground", children: plan.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-end gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-black text-4xl text-foreground", children: [
                    "₹",
                    plan.price.toLocaleString("en-IN")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-sm mb-1", children: [
                    "/",
                    plan.duration.toLowerCase()
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3 mb-8 flex-1", children: plan.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Check,
                  {
                    size: 14,
                    className: `shrink-0 mt-0.5 ${plan.color === "gold" ? "text-secondary" : "text-primary"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: feat })
              ] }, feat)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  "data-ocid": `membership.plan.${plan.id}.cta`,
                  className: `w-full py-3 text-center font-display font-bold text-sm tracking-wider uppercase transition-smooth ${config.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border text-foreground hover:border-foreground"}`,
                  children: "Get Started"
                }
              )
            ]
          },
          plan.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-2 gap-5", children: plans.slice(3).map((plan, i) => {
        const config = colorConfig[plan.color];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `membership.longterm.item.${i + 1}`,
            className: `relative bg-card border ${config.border} p-6 flex flex-col md:flex-row gap-6`,
            children: [
              plan.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute -top-3 left-6 px-3 py-1 text-xs font-display font-bold tracking-widest uppercase border ${config.badge}`,
                  children: plan.badge
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-xl uppercase text-foreground", children: plan.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-end gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-black text-3xl text-foreground", children: [
                    "₹",
                    plan.price.toLocaleString("en-IN")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-sm mb-0.5", children: [
                    "/",
                    plan.duration.toLowerCase()
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2 flex-1", children: plan.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2.5 text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Check,
                      {
                        size: 13,
                        className: "shrink-0 mt-0.5 text-secondary"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: feat })
                  ]
                },
                feat
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  "data-ocid": `membership.longterm.${plan.id}.cta`,
                  className: "whitespace-nowrap px-5 py-3 bg-primary text-primary-foreground font-display font-bold text-sm tracking-wider uppercase hover:bg-primary/90 transition-smooth",
                  children: "Enquire"
                }
              ) })
            ]
          },
          plan.id
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-dark py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "Simple Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl md:text-5xl uppercase text-foreground", children: "How to Join" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: procedure.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `membership.procedure.item.${i + 1}`,
          className: "bg-card border border-border p-6 relative overflow-hidden group hover:border-primary/40 transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 right-4 font-display font-black text-5xl text-border/40 group-hover:text-primary/10 transition-smooth", children: step.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg uppercase text-foreground mb-3 pr-12", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: step.desc })
          ]
        },
        step.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "Common Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl uppercase text-foreground", children: "FAQs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `membership.faq.item.${i + 1}`,
          className: "bg-card border border-border overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(openFaq === i ? null : i),
                "data-ocid": `membership.faq.toggle.${i + 1}`,
                className: "w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-muted/20 transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm", children: faq.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ArrowRight,
                    {
                      size: 16,
                      className: `text-muted-foreground shrink-0 transition-smooth ${openFaq === i ? "rotate-90 text-primary" : ""}`
                    }
                  )
                ]
              }
            ),
            openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-4 text-sm text-muted-foreground border-t border-border pt-3", children: faq.a })
          ]
        },
        faq.q
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-dark py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 36, className: "text-primary mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl uppercase text-foreground mb-4", children: "Risk-Free Commitment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Not satisfied in the first 7 days? Full refund, no questions asked. We're that confident you'll love it here." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contact",
            "data-ocid": "membership.trial_cta",
            className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth",
            children: [
              "Book Free Tour ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+919876543210",
            "data-ocid": "membership.call_cta",
            className: "inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-bold tracking-wider uppercase hover:border-foreground transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
              " Call Us"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  Membership as default
};

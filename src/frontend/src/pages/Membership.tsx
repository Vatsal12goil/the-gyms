import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, Shield, Star } from "lucide-react";
import { useState } from "react";
import plansData from "../data/membership-plans.json";
import type { MembershipPlan } from "../types";

const plans = plansData as MembershipPlan[];

const procedure = [
  {
    step: "01",
    title: "Choose Your Plan",
    desc: "Browse our membership tiers and select the plan that fits your fitness goals and budget.",
  },
  {
    step: "02",
    title: "Free Gym Tour",
    desc: "Visit us anytime for a complimentary facility tour. See the equipment, meet the team, feel the energy.",
  },
  {
    step: "03",
    title: "Health Assessment",
    desc: "Every new member gets a detailed fitness assessment with a certified trainer — no extra charge.",
  },
  {
    step: "04",
    title: "Registration",
    desc: "Simple paperwork, photo ID, and your first payment. We're done in 15 minutes. No hidden fees ever.",
  },
  {
    step: "05",
    title: "Onboarding Session",
    desc: "Your trainer walks you through the gym, sets your initial program, and answers every question.",
  },
  {
    step: "06",
    title: "Train. Grow. Repeat.",
    desc: "Show up, put in the work, and let our community and trainers take care of the rest.",
  },
];

const faqs = [
  {
    q: "Are there any joining fees?",
    a: "No hidden joining or registration fees. The price you see is the price you pay. Period.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes. Members can freeze their membership for up to 30 days per year for medical reasons or travel. Contact our desk to arrange.",
  },
  {
    q: "What documents do I need?",
    a: "Any government-issued photo ID (Aadhaar, PAN, Passport) and one passport-size photo. That's it.",
  },
  {
    q: "Is personal training included?",
    a: "Warrior includes 1 PT session/month. Elite includes 4 PT sessions/month. Starter members can book PT at ₹800/session.",
  },
  {
    q: "Can I switch between plans?",
    a: "Absolutely. Upgrade anytime — pay the difference pro-rated. Downgrade takes effect at the next billing cycle.",
  },
];

const colorConfig = {
  standard: {
    border: "border-border",
    badge: "text-muted-foreground",
    highlight: false,
  },
  gold: {
    border: "border-secondary/60",
    badge: "text-secondary bg-secondary/10 border-secondary/30",
    highlight: true,
  },
  platinum: {
    border: "border-foreground/30",
    badge: "text-foreground bg-foreground/5 border-foreground/20",
    highlight: false,
  },
};

export default function Membership() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/membership-card.dim_800x500.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
            Invest In Yourself
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-foreground">
            Memberships
          </h1>
        </div>
      </section>

      {/* Plans */}
      <section className="section-darker py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
              Choose Your Level
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground mb-4">
              Membership Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every plan includes access to world-class equipment, certified
              trainers, and a community that makes you better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plans.slice(0, 3).map((plan, i) => {
              const config = colorConfig[plan.color];
              return (
                <div
                  key={plan.id}
                  data-ocid={`membership.plan.item.${i + 1}`}
                  className={`relative bg-card border ${config.border} p-6 flex flex-col ${
                    config.highlight ? "shadow-gold-glow" : ""
                  }`}
                >
                  {plan.badge && (
                    <div
                      className={`absolute -top-3 left-6 px-3 py-1 text-xs font-display font-bold tracking-widest uppercase border ${config.badge}`}
                    >
                      {plan.badge}
                    </div>
                  )}
                  <div className="mb-6 pt-2">
                    <p className="font-display font-black text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      {plan.color === "standard"
                        ? "Entry"
                        : plan.color === "gold"
                          ? "Premium"
                          : "Elite"}
                    </p>
                    <h3 className="font-display font-black text-2xl uppercase text-foreground">
                      {plan.name}
                    </h3>
                    <div className="mt-4 flex items-end gap-1">
                      <span className="font-display font-black text-4xl text-foreground">
                        ₹{plan.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-muted-foreground text-sm mb-1">
                        /{plan.duration.toLowerCase()}
                      </span>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm">
                        <Check
                          size={14}
                          className={`shrink-0 mt-0.5 ${plan.color === "gold" ? "text-secondary" : "text-primary"}`}
                        />
                        <span className="text-muted-foreground">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    data-ocid={`membership.plan.${plan.id}.cta`}
                    className={`w-full py-3 text-center font-display font-bold text-sm tracking-wider uppercase transition-smooth ${
                      config.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Long-term plans */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {plans.slice(3).map((plan, i) => {
              const config = colorConfig[plan.color];
              return (
                <div
                  key={plan.id}
                  data-ocid={`membership.longterm.item.${i + 1}`}
                  className={`relative bg-card border ${config.border} p-6 flex flex-col md:flex-row gap-6`}
                >
                  {plan.badge && (
                    <div
                      className={`absolute -top-3 left-6 px-3 py-1 text-xs font-display font-bold tracking-widest uppercase border ${config.badge}`}
                    >
                      {plan.badge}
                    </div>
                  )}
                  <div className="pt-2">
                    <h3 className="font-display font-black text-xl uppercase text-foreground">
                      {plan.name}
                    </h3>
                    <div className="mt-2 flex items-end gap-1">
                      <span className="font-display font-black text-3xl text-foreground">
                        ₹{plan.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-muted-foreground text-sm mb-0.5">
                        /{plan.duration.toLowerCase()}
                      </span>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check
                          size={13}
                          className="shrink-0 mt-0.5 text-secondary"
                        />
                        <span className="text-muted-foreground">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="self-center">
                    <Link
                      to="/contact"
                      data-ocid={`membership.longterm.${plan.id}.cta`}
                      className="whitespace-nowrap px-5 py-3 bg-primary text-primary-foreground font-display font-bold text-sm tracking-wider uppercase hover:bg-primary/90 transition-smooth"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
              Simple Process
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
              How to Join
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {procedure.map((step, i) => (
              <div
                key={step.step}
                data-ocid={`membership.procedure.item.${i + 1}`}
                className="bg-card border border-border p-6 relative overflow-hidden group hover:border-primary/40 transition-smooth"
              >
                <span className="absolute top-4 right-4 font-display font-black text-5xl text-border/40 group-hover:text-primary/10 transition-smooth">
                  {step.step}
                </span>
                <h3 className="font-display font-bold text-lg uppercase text-foreground mb-3 pr-12">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-darker py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
              Common Questions
            </p>
            <h2 className="font-display font-black text-4xl uppercase text-foreground">
              FAQs
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                data-ocid={`membership.faq.item.${i + 1}`}
                className="bg-card border border-border overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-ocid={`membership.faq.toggle.${i + 1}`}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-muted/20 transition-smooth"
                >
                  <span className="font-semibold text-foreground text-sm">
                    {faq.q}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`text-muted-foreground shrink-0 transition-smooth ${
                      openFaq === i ? "rotate-90 text-primary" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground border-t border-border pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-dark py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Shield size={36} className="text-primary mx-auto mb-4" />
          <h2 className="font-display font-black text-4xl uppercase text-foreground mb-4">
            Risk-Free Commitment
          </h2>
          <p className="text-muted-foreground mb-8">
            Not satisfied in the first 7 days? Full refund, no questions asked.
            We're that confident you'll love it here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="membership.trial_cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth"
            >
              Book Free Tour <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919876543210"
              data-ocid="membership.call_cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-bold tracking-wider uppercase hover:border-foreground transition-smooth"
            >
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

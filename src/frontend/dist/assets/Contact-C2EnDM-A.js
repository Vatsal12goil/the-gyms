import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, P as Phone, M as Mail, a as MapPin } from "./index-DzByOr0V.js";
import { C as Clock } from "./clock-D6q3ay0j.js";
import { C as Check } from "./check-BGj_zr2g.js";
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    sub: "Mon–Sat 9am–8pm",
    href: "tel:+919876543210"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@thegyms.in",
    sub: "We reply within 4 hours",
    href: "mailto:info@thegyms.in"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "12, Fitness Avenue, Koramangala",
    sub: "Bengaluru — 560034",
    href: "#"
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon–Sat: 5am – 11pm",
    sub: "Sunday: 6am – 8pm",
    href: "#"
  }
];
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !form.email.includes("@"))
      newErrors.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 10)
      newErrors.phone = "Valid 10-digit phone required";
    if (!form.interest) newErrors.interest = "Please select an interest";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "We're Here to Help" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-5xl md:text-6xl uppercase text-foreground", children: "Contact Us" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-darker py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary text-xs font-display tracking-widest uppercase mb-3", children: "Get in Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-3xl uppercase text-foreground mb-6", children: "Talk to Our Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-10", children: "Whether you want to book a free trial, enquire about memberships, or have a specific question — our team is here. We typically respond within 4 business hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: contactInfo.map(({ icon: Icon, title, value, sub, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href,
            "data-ocid": `contact.info.${title.toLowerCase()}`,
            className: "flex items-start gap-4 bg-card border border-border p-4 hover:border-primary/40 transition-smooth group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-0.5", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sub })
              ] })
            ]
          },
          title
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 bg-card border border-border p-8", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "contact.success_state",
          className: "flex flex-col items-center justify-center h-full py-12 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-primary/10 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 32, className: "text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-2xl uppercase text-foreground mb-3", children: "Message Received!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm max-w-xs", children: [
              "Thank you, ",
              form.name,
              "! Our team will reach out to you at",
              " ",
              form.phone,
              " within 4 hours."
            ] })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, "data-ocid": "contact.form", noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-xl uppercase text-foreground mb-6", children: "Send Us a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "name",
                className: "block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide",
                children: "Full Name *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "name",
                name: "name",
                type: "text",
                value: form.name,
                onChange: handleChange,
                placeholder: "Rahul Verma",
                "data-ocid": "contact.name_input",
                className: "w-full bg-background border border-input text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                "data-ocid": "contact.name.field_error",
                className: "text-xs text-primary mt-1.5",
                children: errors.name
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "phone",
                className: "block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide",
                children: "Phone Number *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "phone",
                name: "phone",
                type: "tel",
                value: form.phone,
                onChange: handleChange,
                placeholder: "+91 98765 43210",
                "data-ocid": "contact.phone_input",
                className: "w-full bg-background border border-input text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
              }
            ),
            errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                "data-ocid": "contact.phone.field_error",
                className: "text-xs text-primary mt-1.5",
                children: errors.phone
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "email",
              className: "block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide",
              children: "Email Address *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              value: form.email,
              onChange: handleChange,
              placeholder: "rahul@example.com",
              "data-ocid": "contact.email_input",
              className: "w-full bg-background border border-input text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
            }
          ),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-ocid": "contact.email.field_error",
              className: "text-xs text-primary mt-1.5",
              children: errors.email
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "interest",
              className: "block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide",
              children: "I'm Interested In *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "interest",
              name: "interest",
              value: form.interest,
              onChange: handleChange,
              "data-ocid": "contact.interest_select",
              className: "w-full bg-background border border-input text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-smooth appearance-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select an option..." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "starter", children: "Starter Membership" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "warrior", children: "Warrior Membership" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "elite", children: "Elite Membership" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "personal-training", children: "Personal Training" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "free-trial", children: "Free Trial Session" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "corporate", children: "Corporate Membership" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "General Enquiry" })
              ]
            }
          ),
          errors.interest && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-ocid": "contact.interest.field_error",
              className: "text-xs text-primary mt-1.5",
              children: errors.interest
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "message",
              className: "block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide",
              children: "Message (Optional)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "message",
              name: "message",
              value: form.message,
              onChange: handleChange,
              rows: 4,
              placeholder: "Tell us about your fitness goals...",
              "data-ocid": "contact.message_textarea",
              className: "w-full bg-background border border-input text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            "data-ocid": "contact.submit_button",
            className: "w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
              "Send Message"
            ]
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-dark py-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 bg-card border-t border-border flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/about-gym.dim_1200x700.jpg",
          alt: "Gym location",
          className: "absolute inset-0 w-full h-full object-cover opacity-20"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-2xl uppercase text-foreground mb-2", children: "12, Fitness Avenue, Koramangala" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Bengaluru, Karnataka — 560034" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://maps.google.com/?q=Koramangala+Bengaluru",
            target: "_blank",
            rel: "noopener noreferrer",
            "data-ocid": "contact.map_link",
            className: "mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-display font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 13 }),
              " Get Directions"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  Contact as default
};

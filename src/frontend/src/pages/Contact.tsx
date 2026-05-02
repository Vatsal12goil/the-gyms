import { Check, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    sub: "Mon–Sat 9am–8pm",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@thegyms.in",
    sub: "We reply within 4 hours",
    href: "mailto:info@thegyms.in",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "12, Fitness Avenue, Koramangala",
    sub: "Bengaluru — 560034",
    href: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon–Sat: 5am – 11pm",
    sub: "Sunday: 6am – 8pm",
    href: "#",
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !form.email.includes("@"))
      newErrors.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 10)
      newErrors.phone = "Valid 10-digit phone required";
    if (!form.interest) newErrors.interest = "Please select an interest";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/gym-interior.dim_1200x800.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
            We're Here to Help
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-foreground">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="section-darker py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <p className="text-secondary text-xs font-display tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="font-display font-black text-3xl uppercase text-foreground mb-6">
              Talk to Our Team
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              Whether you want to book a free trial, enquire about memberships,
              or have a specific question — our team is here. We typically
              respond within 4 business hours.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, title, value, sub, href }) => (
                <a
                  key={title}
                  href={href}
                  data-ocid={`contact.info.${title.toLowerCase()}`}
                  className="flex items-start gap-4 bg-card border border-border p-4 hover:border-primary/40 transition-smooth group"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-smooth">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      {title}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-card border border-border p-8">
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                  <Check size={32} className="text-primary" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-foreground mb-3">
                  Message Received!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thank you, {form.name}! Our team will reach out to you at{" "}
                  {form.phone} within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-ocid="contact.form" noValidate>
                <h3 className="font-display font-black text-xl uppercase text-foreground mb-6">
                  Send Us a Message
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Verma"
                      data-ocid="contact.name_input"
                      className="w-full bg-background border border-input text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
                    />
                    {errors.name && (
                      <p
                        data-ocid="contact.name.field_error"
                        className="text-xs text-primary mt-1.5"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      data-ocid="contact.phone_input"
                      className="w-full bg-background border border-input text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
                    />
                    {errors.phone && (
                      <p
                        data-ocid="contact.phone.field_error"
                        className="text-xs text-primary mt-1.5"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    data-ocid="contact.email_input"
                    className="w-full bg-background border border-input text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
                  />
                  {errors.email && (
                    <p
                      data-ocid="contact.email.field_error"
                      className="text-xs text-primary mt-1.5"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="interest"
                    className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide"
                  >
                    I'm Interested In *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    data-ocid="contact.interest_select"
                    className="w-full bg-background border border-input text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-smooth appearance-none"
                  >
                    <option value="">Select an option...</option>
                    <option value="starter">Starter Membership</option>
                    <option value="warrior">Warrior Membership</option>
                    <option value="elite">Elite Membership</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="free-trial">Free Trial Session</option>
                    <option value="corporate">Corporate Membership</option>
                    <option value="other">General Enquiry</option>
                  </select>
                  {errors.interest && (
                    <p
                      data-ocid="contact.interest.field_error"
                      className="text-xs text-primary mt-1.5"
                    >
                      {errors.interest}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your fitness goals..."
                    data-ocid="contact.message_textarea"
                    className="w-full bg-background border border-input text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase hover:bg-primary/90 transition-smooth"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-dark py-0">
        <div className="relative h-64 bg-card border-t border-border flex items-center justify-center overflow-hidden">
          <img
            src="/assets/generated/about-gym.dim_1200x700.jpg"
            alt="Gym location"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 text-center">
            <p className="font-display font-black text-2xl uppercase text-foreground mb-2">
              12, Fitness Avenue, Koramangala
            </p>
            <p className="text-muted-foreground text-sm">
              Bengaluru, Karnataka — 560034
            </p>
            <a
              href="https://maps.google.com/?q=Koramangala+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.map_link"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-display font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-smooth"
            >
              <MapPin size={13} /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

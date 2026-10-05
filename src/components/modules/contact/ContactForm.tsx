"use client";

import React, {useState} from "react";
import {Github, Linkedin, Mail} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Message send failed. Please try again.");
      }

      window.alert("Message sent successfully.");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({name: "", email: "", message: ""});
      }, 3000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      window.alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="mx-auto max-w-6xl py-20 px-5 text-foreground max-md:py-10">
        <div className="rounded-xl border border-primary/35 bg-card/70 p-10 text-center shadow-sm backdrop-blur-sm">
          <h2 className="mb-4 text-5xl font-black text-primary md:text-7xl">THANK YOU!</h2>
          <p className="text-xl text-muted-foreground">Your message has been sent successfully.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl py-20 px-5 text-foreground max-md:py-10">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-16 max-md:mb-8 max-md:text-xl max-md:text-start px-8">4. Contact Me</h2>

        <div className="grid grid-cols-1 gap-8 md:flex md:justify-between">
          <aside className="md:w-[10%]">
            <div className="grid grid-cols-1 gap-3 p-2 md:p-6">
              <a
                href="mailto:dipongkorroy000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg px-4 py-4"
              >
                <div className="flex w-full flex-col items-center text-center">
                  <div className="mb-2 rounded-full border border-primary/40 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,255,155,0.35)]">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">Send a mail</p>
                </div>
              </a>

              <a
                href="https://github.com/dipongkor-dip"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg px-4 py-4"
              >
                <div className="flex w-full flex-col items-center text-center">
                  <div className="mb-2 rounded-full border border-primary/40 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,255,155,0.35)]">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold">GitHub</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">View profile</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/dipongkor"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg px-4 py-4"
              >
                <div className="flex w-full flex-col items-center text-center">
                  <div className="mb-2 rounded-full border border-primary/40 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,255,155,0.35)]">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold">LinkedIn</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">Let&apos;s connect</p>
                </div>
              </a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="space-y-6 rounded border border-primary/35 bg-card/70 p-6 shadow-sm backdrop-blur-sm md:w-[80%] md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-input bg-background/40 px-4 py-1 text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30 md:py-3"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-lg border border-input bg-background/40 px-4 py-1 text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30 md:py-3"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted-foreground">
                Message
              </label>
              <div className="relative rounded-2xl border border-primary/35 bg-gradient-to-b from-background/75 to-background/45 px-4 pb-3 pt-4 transition-all duration-200 before:absolute before:-left-2 before:top-7 before:h-4 before:w-4 before:rotate-45 before:border-b before:border-l before:border-primary/35 before:bg-background/70 focus-within:border-primary/60 focus-within:shadow-[0_0_0_3px_rgba(34,255,155,0.14)]">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={7}
                  required
                  className="w-full min-h-[190px] resize-none bg-transparent px-1 py-1 text-sm leading-relaxed text-foreground outline-none placeholder:text-muted-foreground/70 md:text-base"
                />
                <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Say hello, ask a question, or share an opportunity.</span>
                  <span>{formData.message.length} chars</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

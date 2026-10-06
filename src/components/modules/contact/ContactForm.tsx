"use client";

import React, {useState} from "react";
import {Github, Linkedin, Mail, Send} from "lucide-react";

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
      <section className="mx-auto max-w-6xl px-5 py-16 text-foreground max-md:py-8">
        <div className="rounded-xl border border-primary/35 bg-card/70 p-8 text-center shadow-sm backdrop-blur-sm max-md:p-6">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-5xl">THANK YOU!</h2>
          <p className="text-base text-muted-foreground">Your message has been sent successfully.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 text-foreground max-md:py-8">
      <div className="w-full">
        <h2 className="mb-10 px-4 text-center text-xl font-bold max-md:mb-6 max-md:px-0 max-md:text-start max-md:text-lg">4. Contact Me</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
          <aside>
            <div className="grid grid-cols-3 gap-2 md:grid-cols-1">
              <a
                href="mailto:dipongkorroy000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-border/60 px-2 py-3 text-center transition-colors hover:border-primary/40 hover:bg-card/40 md:px-3"
              >
                <div className="flex w-full flex-col items-center text-center">
                  <div className="mb-1.5 rounded-full border border-primary/40 p-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,255,155,0.35)]">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs font-semibold">Email</p>
                  <p className="mt-1 text-[10px] text-muted-foreground">Send a mail</p>
                </div>
              </a>

              <a
                href="https://github.com/dipongkor-dip"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-border/60 px-2 py-3 text-center transition-colors hover:border-primary/40 hover:bg-card/40 md:px-3"
              >
                <div className="flex w-full flex-col items-center text-center">
                  <div className="mb-1.5 rounded-full border border-primary/40 p-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,255,155,0.35)]">
                    <Github className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs font-semibold">GitHub</p>
                  <p className="mt-1 text-[10px] text-muted-foreground">View profile</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/dipongkor"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-border/60 px-2 py-3 text-center transition-colors hover:border-primary/40 hover:bg-card/40 md:px-3"
              >
                <div className="flex w-full flex-col items-center text-center">
                  <div className="mb-1.5 rounded-full border border-primary/40 p-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,255,155,0.35)]">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs font-semibold">LinkedIn</p>
                  <p className="mt-1 text-[10px] text-muted-foreground">Let&apos;s connect</p>
                </div>
              </a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-primary/35 bg-card/70 p-5 shadow-sm backdrop-blur-sm md:p-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
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
                  className="w-full rounded-lg border border-input bg-background/40 px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
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
                  className="w-full rounded-lg border border-input bg-background/40 px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Message
              </label>
              <div className="relative rounded-xl border border-primary/35 bg-linear-to-b from-background/75 to-background/45 px-3 pb-2.5 pt-3 transition-all duration-200 before:absolute before:-left-2 before:top-7 before:h-4 before:w-4 before:rotate-45 before:border-b before:border-l before:border-primary/35 before:bg-background/70 focus-within:border-primary/60 focus-within:shadow-[0_0_0_3px_rgba(34,255,155,0.14)]">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={6}
                  required
                  className="w-full min-h-37.5 resize-none bg-transparent px-1 py-1 text-sm leading-relaxed text-foreground outline-none placeholder:text-muted-foreground/70"
                />
                <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>Say hello, ask a question, or share an opportunity.</span>
                  <span>{formData.message.length} chars</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

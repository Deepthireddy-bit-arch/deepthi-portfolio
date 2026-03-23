
"use client";

import { useState, useEffect } from "react";
import type { FormData, FormErrors, FormStatus } from "../contact/types";

const FORMSPREE_URL = "https://formspree.io/f/xkoqeodd";


function validate(data: FormData): FormErrors {
  const errs: FormErrors = {};
  if (!data.name.trim()) errs.name = "Name is required";
  if (!data.email.trim()) errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = "Enter a valid email";
  if (!data.subject.trim()) errs.subject = "Subject is required";
  if (!data.message.trim()) errs.message = "Message is required";
  else if (data.message.trim().length < 20)
    errs.message = "At least 20 characters";
  return errs;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitMsg, setSubmitMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors])
      setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("submitting");
    setSubmitMsg(null);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setSubmitMsg({
        type: "success",
        text: "✓ Message sent successfully! I'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });

    } catch {
      setStatus("idle");
      setSubmitMsg({
        type: "error",
        text: "✗ Something went wrong. Please try again or email me directly.",
      });
    }
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    padding: "12px 16px",
    border: `1.5px solid ${errors[field as keyof FormErrors] ? "#E84D0E" : focused === field ? "#F05A1A" : "#ECEAE6"}`,
    borderRadius: 12,
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    color: "#0C0C0A",
    background: focused === field ? "#FFFAF7" : "#FAFAF8",
    outline: "none",
    transition: "border-color .2s, background .2s, box-shadow .2s",
    boxShadow: focused === field ? "0 0 0 4px rgba(240,90,26,0.08)" : "none",
  });

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #ECEAE6",
      borderRadius: 24,
      padding: isMobile ? "24px 18px" : "36px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    }}>
      <div style={{ marginBottom: 28 }}>
        <h3 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: isMobile ? 18 : 22,
          fontWeight: 800,
          color: "#0C0C0A",
          margin: "0 0 6px",
        }}>
          Send a Message
        </h3>
        <p style={{ fontSize: 14, color: "#B0ABA6", margin: 0 }}>
          Fill in the form and I'll reply as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 16,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#6B6866" }}>
              Your Name *
            </label>
            <input
              name="name" type="text" placeholder="Doddipalli Deepthi"
              value={form.name} onChange={handleChange}
              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
              style={inputStyle("name")}
            />
            {errors.name && (
              <span style={{ fontSize: 11, color: "#E84D0E", fontWeight: 600 }}>{errors.name}</span>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#6B6866" }}>
              Email Address *
            </label>
            <input
              name="email" type="email" placeholder="doddipallideepthi111@gmail.com"
              value={form.email} onChange={handleChange}
              onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
              style={inputStyle("email")}
            />
            {errors.email && (
              <span style={{ fontSize: 11, color: "#E84D0E", fontWeight: 600 }}>{errors.email}</span>
            )}
          </div>

        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#6B6866" }}>
            Subject *
          </label>
          <input
            name="subject" type="text"
            placeholder="Project Collaboration / Job Opportunity..."
            value={form.subject} onChange={handleChange}
            onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
            style={inputStyle("subject")}
          />
          {errors.subject && (
            <span style={{ fontSize: 11, color: "#E84D0E", fontWeight: 600 }}>{errors.subject}</span>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#6B6866" }}>
            Message *
          </label>
          <textarea
            name="message" rows={5}
            placeholder="Tell me about your project or opportunity..."
            value={form.message} onChange={handleChange}
            onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
            style={{ ...inputStyle("message"), resize: "vertical", minHeight: 120 }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {errors.message
              ? <span style={{ fontSize: 11, color: "#E84D0E", fontWeight: 600 }}>{errors.message}</span>
              : <span />
            }
            <span style={{ fontSize: 11, color: "#B0ABA6", marginLeft: "auto" }}>
              {form.message.length} / 500
            </span>
          </div>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          style={{
            padding: "14px 0",
            borderRadius: 14,
            border: "none",
            background: status === "submitting"
              ? "#F0A080"
              : "linear-gradient(135deg,#F05A1A,#FF8040)",
            color: "#fff",
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: status === "submitting" ? "not-allowed" : "pointer",
            boxShadow: "0 4px 20px rgba(240,90,26,0.3)",
            transition: "transform .25s, box-shadow .25s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {status === "submitting" ? (
            <>
              <span style={{
                width: 16, height: 16,
                border: "2px solid rgba(255,255,255,0.4)",
                borderTopColor: "#fff",
                borderRadius: "50%",
                animation: "spin .7s linear infinite",
                display: "inline-block",
              }} />
              Sending...
            </>
          ) : status === "success" ? "✓ Message Sent!" : "Send Message →"}
        </button>
        {submitMsg && (
          <div style={{
            padding: "14px 18px",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 1.6,
            background: submitMsg.type === "success" ? "#F0FFF5" : "#FFF5F5",
            border: `1.5px solid ${submitMsg.type === "success" ? "#86EFAC" : "#FCA5A5"}`,
            color: submitMsg.type === "success" ? "#166534" : "#991B1B",
          }}>
            {submitMsg.text}
          </div>
        )}

      </form>
    </div>
  );
}
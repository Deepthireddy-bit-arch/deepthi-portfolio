// animations/useContactAnimations.ts
"use client";

import { useEffect, useState, useCallback } from "react";

function loadGsap(): Promise<void> {
  return new Promise((resolve) => {
    if ((window as any).gsap && (window as any).ScrollTrigger) { resolve(); return; }
    const s1 = document.createElement("script");
    s1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    s1.onload = () => {
      const s2 = document.createElement("script");
      s2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
      s2.onload = () => resolve();
      document.head.appendChild(s2);
    };
    document.head.appendChild(s1);
  });
}

export function useContactAnimations() {
  const [ready, setReady] = useState(false);
  useEffect(() => { loadGsap().then(() => setReady(true)); }, []);

  const initAnimations = useCallback(() => {
    if (!ready) return;
    const gsap = (window as any).gsap;
    const ST   = (window as any).ScrollTrigger;
    gsap.registerPlugin(ST);

    // Header stagger
    gsap.fromTo(".con-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.05 });
    gsap.fromTo(".con-title",   { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", delay: 0.18 });
    gsap.fromTo(".con-desc",    { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.70, ease: "power3.out", delay: 0.30 });

    // Left column — info cards stagger
    document.querySelectorAll(".con-info-card").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -28 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out",
          delay: 0.4 + i * 0.1,
          scrollTrigger: { trigger: el, start: "top 94%" } }
      );
    });

    // Social links
    document.querySelectorAll(".con-social-btn").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 14, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.7)",
          delay: 0.7 + i * 0.08,
          scrollTrigger: { trigger: el, start: "top 96%" } }
      );
    });

    // Form slides in from right
    gsap.fromTo(".con-form-card",
      { opacity: 0, x: 32 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.35,
        scrollTrigger: { trigger: ".con-form-card", start: "top 92%" } }
    );

    // Form fields stagger
    document.querySelectorAll(".con-field").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
          delay: 0.55 + i * 0.09,
          scrollTrigger: { trigger: el, start: "top 96%" } }
      );
    });
  }, [ready]);

  return { gsapReady: ready, initAnimations };
}

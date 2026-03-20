// animations/useProjectAnimations.ts
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

export function useProjectAnimations() {
  const [ready, setReady] = useState(false);
  useEffect(() => { loadGsap().then(() => setReady(true)); }, []);

  const initAnimations = useCallback(() => {
    if (!ready) return;
    const gsap = (window as any).gsap;
    const ST   = (window as any).ScrollTrigger;
    gsap.registerPlugin(ST);

    gsap.fromTo(".proj-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.05 });
    gsap.fromTo(".proj-title",   { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", delay: 0.18 });
    gsap.fromTo(".proj-desc",    { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.70, ease: "power3.out", delay: 0.30 });

    document.querySelectorAll(".proj-stat").forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, scale: 0.88, y: 16 },
        { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: "back.out(1.7)", delay: 0.44 + i * 0.08 });
    });

    gsap.fromTo(".proj-filters", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.5 });

    document.querySelectorAll(".proj-card").forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.1 + i * 0.1,
          scrollTrigger: { trigger: el, start: "top 94%" } });
    });

    gsap.fromTo("#proj-footer", { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: "#proj-footer", start: "top 92%" } });
  }, [ready]);

  const reanimateCards = useCallback(() => {
    if (!ready) return;
    const gsap = (window as any).gsap;
    setTimeout(() => {
      gsap.fromTo(".proj-card",
        { opacity: 0, y: 22, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.09, duration: 0.45, ease: "power2.out" });
    }, 60);
  }, [ready]);

  return { gsapReady: ready, initAnimations, reanimateCards };
}

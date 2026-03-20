'use client';
import { useEffect } from 'react';

export function useAboutAnimations(ready: boolean) {
  useEffect(() => {
    if (!ready) return;
    let killed = false;

    (async () => {
      const { gsap }         = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (killed) return;

      // ── 1. Hero image parallax ──────────────────────────────────────────
      const heroImg = document.querySelector<HTMLElement>('[data-hero-img]');
      if (heroImg) {
        gsap.to(heroImg, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: { trigger: heroImg, start: 'top top', end: 'bottom top', scrub: true },
        });
      }

      // ── 2. Hero text fade-up on load ────────────────────────────────────
      const heroTexts = document.querySelectorAll('[data-hero-text]');
      gsap.fromTo(
        heroTexts,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );

      // ── 3. Section headings — slide up on scroll ────────────────────────
      document.querySelectorAll<HTMLElement>('[data-reveal-heading]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      });

      // ── 4. Fact items — stagger in ─────────────────────────────────────
      const facts = document.querySelectorAll('[data-fact-item]');
      if (facts.length) {
        gsap.fromTo(
          facts,
          { x: -24, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power2.out',
            scrollTrigger: { trigger: facts[0], start: 'top 84%', once: true },
          }
        );
      }

      // ── 5. Backstory paragraphs — line by line reveal ──────────────────
      document.querySelectorAll<HTMLElement>('[data-story-para]').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      });

      // ── 6. Life moment cards — scale up ────────────────────────────────
      document.querySelectorAll<HTMLElement>('[data-moment-card]').forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0, y: 30 },
          {
            scale: 1, opacity: 1, y: 0,
            duration: 0.6, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%', once: true },
          }
        );
      });

      // ── 7. Tech stack items — appear with stagger ───────────────────────
      const techItems = document.querySelectorAll('[data-tech-item]');
      if (techItems.length) {
        gsap.fromTo(
          techItems,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.4, stagger: 0.055, ease: 'power2.out',
            scrollTrigger: { trigger: techItems[0], start: 'top 84%', once: true },
          }
        );
      }

      // ── 8. Passions block — wipe from left ──────────────────────────────
      const passionsText = document.querySelector('[data-passions-text]');
      if (passionsText) {
        gsap.fromTo(
          passionsText,
          { x: -40, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: passionsText, start: 'top 82%', once: true },
          }
        );
      }

      // ── 9. Horizontal scroll ticker (continuous) ────────────────────────
      const ticker = document.querySelector<HTMLElement>('[data-ticker-inner]');
      if (ticker) {
        gsap.to(ticker, {
          x: '-50%',
          duration: 24,
          ease: 'none',
          repeat: -1,
        });
      }

      // ── 10. Currently-building line draw ───────────────────────────────
      const buildingLine = document.querySelector<SVGLineElement>('[data-building-line]');
      if (buildingLine) {
        const len = buildingLine.getTotalLength?.() ?? 300;
        gsap.fromTo(
          buildingLine,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut',
            scrollTrigger: { trigger: buildingLine, start: 'top 85%', once: true },
          }
        );
      }
    })();

    return () => {
      killed = true;
      // ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [ready]);
}
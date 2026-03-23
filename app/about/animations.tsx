'use client';
import { useEffect } from 'react';

export function useAboutAnimations(ready: boolean) {
  useEffect(() => {
    if (!ready) return;
    let killed = false;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (killed) return;
      const heroImg = document.querySelector<HTMLElement>('[data-hero-img]');
      if (heroImg) {
        gsap.to(heroImg, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: { trigger: heroImg, start: 'top top', end: 'bottom top', scrub: true },
        });
      }
      const heroTexts = document.querySelectorAll('[data-hero-text]');
      gsap.fromTo(
        heroTexts,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
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
      const ticker = document.querySelector<HTMLElement>('[data-ticker-inner]');
      if (ticker) {
        gsap.to(ticker, {
          x: '-50%',
          duration: 24,
          ease: 'none',
          repeat: -1,
        });
      }
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

    };
  }, [ready]);
}
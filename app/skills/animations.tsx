'use client';

import { useEffect, useRef, useCallback } from 'react';

type GSAPInstance = typeof import('gsap').gsap;


export function useSkillsAnimation() {
  const gsapRef = useRef<GSAPInstance | null>(null);


  useEffect(() => {
    let mounted = true;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (mounted) gsapRef.current = gsap;
    })();
    return () => { mounted = false; };
  }, []);


  const animateNavSwitch = useCallback(
    (
      fromEl: HTMLElement | null,
      toEl: HTMLElement | null,
      pillEl: HTMLElement | null
    ) => {
      const gsap = gsapRef.current;
      if (!gsap || !toEl || !pillEl) return;

      const toRect = toEl.getBoundingClientRect();
      const parentRect = toEl.parentElement!.getBoundingClientRect();

      gsap.to(pillEl, {
        x: toRect.left - parentRect.left,
        width: toRect.width,
        duration: 0.45,
        ease: 'power3.inOut',
      });


      gsap.fromTo(
        toEl.querySelector('[data-tab-label]'),
        { scale: 0.92 },
        { scale: 1, duration: 0.4, ease: 'back.out(2)' }
      );
    },
    []
  );


  const animateCardsOut = useCallback(
    (containerEl: HTMLElement | null, onComplete?: () => void) => {
      const gsap = gsapRef.current;
      if (!gsap || !containerEl) { onComplete?.(); return; }

      const cards = containerEl.querySelectorAll('[data-skill-card]');
      gsap.to(cards, {
        y: -18,
        opacity: 0,
        scale: 0.96,
        duration: 0.28,
        stagger: 0.03,
        ease: 'power2.in',
        onComplete,
      });
    },
    []
  );

  const animateCardsIn = useCallback(
    (containerEl: HTMLElement | null) => {
      const gsap = gsapRef.current;
      if (!gsap || !containerEl) return;

      const cards = containerEl.querySelectorAll('[data-skill-card]');
      gsap.fromTo(
        cards,
        { y: 36, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.065,
          ease: 'power3.out',
        }
      );
    },
    []
  );

  const animateHeading = useCallback((el: HTMLElement | null) => {
    const gsap = gsapRef.current;
    if (!gsap || !el) return;

    const words = el.querySelectorAll('[data-word]');
    gsap.fromTo(
      words,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power4.out',
      }
    );
  }, []);


  const animateBar = useCallback(
    (el: HTMLElement | null, pct: number, delay = 0) => {
      const gsap = gsapRef.current;
      if (!gsap || !el) return;

      gsap.fromTo(
        el,
        { width: '0%' },
        {
          width: `${pct}%`,
          duration: 1.1,
          delay,
          ease: 'power2.out',
        }
      );
    },
    []
  );


  const animateRing = useCallback(
    (el: SVGCircleElement | null, strength: number, delay = 0) => {
      const gsap = gsapRef.current;
      if (!gsap || !el) return;

      const r = parseFloat(el.getAttribute('r') || '28');
      const circumference = 2 * Math.PI * r;
      const offset = circumference * (1 - strength / 100);

      el.style.strokeDasharray = String(circumference);
      el.style.strokeDashoffset = String(circumference);

      gsap.to(el, {
        strokeDashoffset: offset,
        duration: 1.3,
        delay,
        ease: 'power2.out',
      });
    },
    []
  );

  const bindCardTilt = useCallback((el: HTMLElement | null) => {
    const gsap = gsapRef.current;
    if (!gsap || !el) return;

    const handleMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const rx = ((e.clientY - top) / height - 0.5) * 8;
      const ry = ((e.clientX - left) / width - 0.5) * -8;
      gsap.to(el, { rotateX: rx, rotateY: ry, duration: 0.4, ease: 'power2.out' });
    };

    const handleLeave = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    el.style.transformStyle = 'preserve-3d';

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return {
    animateNavSwitch,
    animateCardsOut,
    animateCardsIn,
    animateHeading,
    animateBar,
    animateRing,
    bindCardTilt,
  };
}

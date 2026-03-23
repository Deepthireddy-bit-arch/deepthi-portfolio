export const EASE = {
  expo: "expo.out",
  back: "back.out(1.4)",
  smooth: "power3.out",
  elastic: "elastic.out(1, 0.4)",
} as const;

export const DURATION = {
  fast: 0.4,
  normal: 0.7,
  slow: 1.0,
  xslow: 1.4,
} as const;

export const staggerConfig = {
  amount: 0.15,
  from: "start" as const,
};
export const timelineDefaults = {
  defaults: {
    ease: EASE.expo,
    duration: DURATION.normal,
  },
};
export const headingReveal = {
  from: {
    yPercent: 110,
    opacity: 0,
    rotateX: -20,
    skewX: 6,
  },
  to: {
    yPercent: 0,
    opacity: 1,
    rotateX: 0,
    skewX: 0,
    ease: EASE.expo,
    duration: DURATION.xslow,
    stagger: 0.04,
  },
};
export const fadeSlideUp = {
  from: { opacity: 0, y: 40 },
  to: {
    opacity: 1,
    y: 0,
    ease: EASE.expo,
    duration: DURATION.normal,
  },
};
export const fadeSlideLeft = {
  from: { opacity: 0, x: 50 },
  to: {
    opacity: 1,
    x: 0,
    ease: EASE.expo,
    duration: DURATION.slow,
  },
};
export const scaleIn = {
  from: { opacity: 0, scale: 0.88 },
  to: {
    opacity: 1,
    scale: 1,
    ease: EASE.back,
    duration: DURATION.normal,
  },
};
export const underlineDraw = {
  from: { scaleX: 0, transformOrigin: "left center" },
  to: {
    scaleX: 1,
    ease: EASE.expo,
    duration: DURATION.slow,
  },
};
export const countUpConfig = {
  ease: EASE.expo,
  duration: 2,
  snap: { innerText: 1 },
};
export const fieldFocusTween = {
  borderBottomColor: "var(--accent)",
  duration: DURATION.fast,
  ease: EASE.smooth,
};
export const scrollTriggerDefaults = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse" as const,
};
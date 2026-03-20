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

// ─── Stagger config for list items ───
export const staggerConfig = {
  amount: 0.15,
  from: "start" as const,
};

// ─── Timeline defaults ───
export const timelineDefaults = {
  defaults: {
    ease: EASE.expo,
    duration: DURATION.normal,
  },
};

// ─── Heading reveal (split chars) ───
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

// ─── Fade-slide up ───
export const fadeSlideUp = {
  from: { opacity: 0, y: 40 },
  to: {
    opacity: 1,
    y: 0,
    ease: EASE.expo,
    duration: DURATION.normal,
  },
};

// ─── Fade-slide left ───
export const fadeSlideLeft = {
  from: { opacity: 0, x: 50 },
  to: {
    opacity: 1,
    x: 0,
    ease: EASE.expo,
    duration: DURATION.slow,
  },
};

// ─── Scale-in ───
export const scaleIn = {
  from: { opacity: 0, scale: 0.88 },
  to: {
    opacity: 1,
    scale: 1,
    ease: EASE.back,
    duration: DURATION.normal,
  },
};

// ─── Underline draw ───
export const underlineDraw = {
  from: { scaleX: 0, transformOrigin: "left center" },
  to: {
    scaleX: 1,
    ease: EASE.expo,
    duration: DURATION.slow,
  },
};

// ─── Number count-up config ───
export const countUpConfig = {
  ease: EASE.expo,
  duration: 2,
  snap: { innerText: 1 },
};

// ─── Field focus tween ───
export const fieldFocusTween = {
  borderBottomColor: "var(--accent)",
  duration: DURATION.fast,
  ease: EASE.smooth,
};

// ─── Scroll trigger defaults ───
export const scrollTriggerDefaults = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse" as const,
};
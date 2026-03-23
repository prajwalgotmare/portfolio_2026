"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const rect = node.getBoundingClientRect();
    const initiallyVisible = rect.top <= window.innerHeight * 0.92;

    setIsReady(true);
    setIsVisible(initiallyVisible);

    if (initiallyVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal",
    isReady ? "reveal-ready" : "",
    isVisible ? "reveal-visible" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      data-direction={direction}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

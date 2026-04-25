import { useEffect, useRef } from "react";

/**
 * Adds the `in-view` class to elements with the `reveal` class
 * when they enter the viewport. Returns a ref to attach to the
 * scroll container (or document body if null).
 */
export function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current ?? document.body;
    const elements = root.querySelectorAll<HTMLElement>(".reveal");
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}

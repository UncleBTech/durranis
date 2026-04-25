import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    setEnabled(true);

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let dx = rx;
    let dy = ry;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dx - 4}px, ${dy - 4}px, 0)`;
      }
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor='hover']")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    let raf = 0;
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ringRef.current) {
        const size = hovering ? 36 : 22;
        ringRef.current.style.transform = `translate3d(${rx - size / 2}px, ${ry - size / 2}px, 0)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.backgroundColor = hovering
          ? "rgba(201,168,76,0.18)"
          : "transparent";
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [hovering]);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-gold mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-gold-strong transition-[width,height,background-color] duration-150 ease-out"
        style={{ width: 22, height: 22 }}
      />
    </>
  );
}

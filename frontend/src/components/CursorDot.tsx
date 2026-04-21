import { useEffect, useRef } from "react";

const CursorDot = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("cursor-hidden");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { x: target.x, y: target.y };
    const ringPos = { x: target.x, y: target.y };
    let ringScale = 1;
    let ringScaleTarget = 1;
    let ringOpacity = 0.35;
    let ringOpacityTarget = 0.35;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const interactive = !!el.closest(
        "a, button, [data-magnetic], [role='button'], input, textarea, select, label"
      );
      ringScaleTarget = interactive ? 1.9 : 1;
      ringOpacityTarget = interactive ? 0.85 : 0.35;
    };

    let raf = 0;
    const tick = () => {
      dotPos.x += (target.x - dotPos.x) * 0.42;
      dotPos.y += (target.y - dotPos.y) * 0.42;
      ringPos.x += (target.x - ringPos.x) * 0.14;
      ringPos.y += (target.y - ringPos.y) * 0.14;
      ringScale += (ringScaleTarget - ringScale) * 0.18;
      ringOpacity += (ringOpacityTarget - ringOpacity) * 0.2;

      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      ring.style.opacity = String(ringOpacity);

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.body.classList.remove("cursor-hidden");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  const baseStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    willChange: "transform, opacity",
  };

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        style={{
          ...baseStyle,
          width: 8,
          height: 8,
          borderRadius: "9999px",
          backgroundColor: "#0E1A2B",
          zIndex: 100000,
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        style={{
          ...baseStyle,
          width: 38,
          height: 38,
          borderRadius: "9999px",
          border: "1px solid rgba(14, 26, 43, 0.5)",
          opacity: 0.35,
          zIndex: 99999,
        }}
      />
    </>
  );
};

export default CursorDot;

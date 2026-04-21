import { useEffect, useRef } from "react";

const TRAIL_MS = 420;

const CursorDot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nibRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const nib = nibRef.current;
    if (!canvas || !nib) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    document.body.classList.add("cursor-hidden");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const nibPos = { x: target.x, y: target.y };
    let angle = 0.35;
    let scale = 1;
    let scaleTarget = 1;

    type Pt = { x: number; y: number; t: number; w: number };
    const trail: Pt[] = [];

    type Splat = { x: number; y: number; vx: number; vy: number; t: number; r: number };
    const splats: Splat[] = [];

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
      scaleTarget = interactive ? 1.35 : 1;
    };

    const onDown = () => {
      const n = 7;
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 0.6 + Math.random() * 2.2;
        splats.push({
          x: nibPos.x,
          y: nibPos.y,
          vx: Math.cos(a) * s,
          vy: Math.sin(a) * s,
          t: performance.now(),
          r: 0.8 + Math.random() * 1.8,
        });
      }
    };

    let raf = 0;
    const tick = () => {
      const now = performance.now();
      const prevX = nibPos.x;
      const prevY = nibPos.y;
      nibPos.x += (target.x - nibPos.x) * 0.38;
      nibPos.y += (target.y - nibPos.y) * 0.38;
      scale += (scaleTarget - scale) * 0.2;

      const dx = nibPos.x - prevX;
      const dy = nibPos.y - prevY;
      const speed = Math.hypot(dx, dy);
      if (speed > 0.4) {
        angle = Math.atan2(dy, dx);
      }

      const w = Math.max(0.5, Math.min(3.2, 3.4 - speed * 0.14));
      trail.push({ x: nibPos.x, y: nibPos.y, t: now, w });
      while (trail.length && now - trail[0].t > TRAIL_MS) trail.shift();

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 1; i < trail.length; i++) {
        const a = trail[i - 1];
        const b = trail[i];
        const age = (now - b.t) / TRAIL_MS;
        const alpha = (1 - age) * 0.55;
        ctx.strokeStyle = `rgba(14, 26, 43, ${alpha})`;
        ctx.lineWidth = b.w * (1 - age * 0.5);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (let i = splats.length - 1; i >= 0; i--) {
        const s = splats[i];
        const age = (now - s.t) / 600;
        if (age >= 1) {
          splats.splice(i, 1);
          continue;
        }
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.88;
        s.vy *= 0.88;
        ctx.fillStyle = `rgba(14, 26, 43, ${(1 - age) * 0.7})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (1 - age * 0.3), 0, Math.PI * 2);
        ctx.fill();
      }

      nib.style.transform = `translate3d(${nibPos.x}px, ${nibPos.y}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });

    return () => {
      document.body.classList.remove("cursor-hidden");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99998,
        }}
      />
      <div
        ref={nibRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          pointerEvents: "none",
          willChange: "transform",
          zIndex: 100000,
        }}
      >
        <svg
          viewBox="-32 -8 40 16"
          width="36"
          height="36"
          style={{ overflow: "visible", display: "block" }}
        >
          <path
            d="M 0 0 L -10 -4 L -26 -2.6 Q -28 0 -26 2.6 L -10 4 Z"
            fill="#0E1A2B"
          />
          <line
            x1="-2"
            y1="0"
            x2="-20"
            y2="0"
            stroke="#ffffff"
            strokeOpacity="0.4"
            strokeWidth="0.6"
          />
          <circle cx="-14" cy="0" r="1.3" fill="#ffffff" fillOpacity="0.4" />
          <path
            d="M -10 -4 L -24 -2 Q -25 -1.5 -24 -1 L -10 -3 Z"
            fill="#ffffff"
            fillOpacity="0.12"
          />
        </svg>
      </div>
    </>
  );
};

export default CursorDot;

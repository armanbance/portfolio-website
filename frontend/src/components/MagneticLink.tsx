import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  as?: "div" | "span" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const MagneticLink = ({
  children,
  className = "",
  strength = 0.35,
  radius = 120,
  as = "div",
  href,
  target,
  rel,
  onClick,
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        const falloff = 1 - dist / radius;
        target.x = dx * strength * falloff;
        target.y = dy * strength * falloff;
      } else {
        target.x = 0;
        target.y = 0;
      }
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength, radius]);

  const commonProps = {
    ref: ref as never,
    className: `inline-block will-change-transform ${className}`,
    "data-magnetic": true,
    onClick,
  };

  if (as === "a" && href) {
    return (
      <a {...commonProps} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  if (as === "span") {
    return <span {...commonProps}>{children}</span>;
  }
  return <div {...commonProps}>{children}</div>;
};

export default MagneticLink;

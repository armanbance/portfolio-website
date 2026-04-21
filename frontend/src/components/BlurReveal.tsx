import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "span" | "li" | "p";
}

const BlurReveal = ({ children, className = "", delay = 0, as = "div" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = window.setTimeout(() => {
              el.classList.add("is-visible");
            }, delay);
            io.unobserve(el);
            return () => window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    return () => io.disconnect();
  }, [delay]);

  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    <Tag ref={ref as never} className={`blur-reveal ${className}`}>
      {children}
    </Tag>
  );
};

export default BlurReveal;

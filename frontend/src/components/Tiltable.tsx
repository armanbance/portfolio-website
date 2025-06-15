import React, { useRef, useEffect, ReactNode } from "react";

interface TiltableProps {
  children: ReactNode;
  className?: string;
}

const Tiltable: React.FC<TiltableProps> = ({ children, className }) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered.current) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * -8;

      element.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(5px)
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseEnter = () => {
      isHovered.current = true;
      element.style.transition = "transform 0.1s ease-out";
    };

    const handleMouseLeave = () => {
      isHovered.current = false;
      element.style.transition = "transform 0.6s ease-out";
      element.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className={className}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default Tiltable;

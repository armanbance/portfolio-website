import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface CardProps {
  item: {
    image: string;
    title: string;
    description: string;
    tags?: string[];
    link?: string;
  };
}

const ExperienceCard: React.FC<CardProps> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!card || !image || !content) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered.current) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * -8;

      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(10px) 
        scale3d(1.02, 1.02, 1.02)
      `;

      // Internal Parallax Effect
      const parallaxX = (centerX - x) / 10;
      const parallaxY = (centerY - y) / 10;

      image.style.transform = `translateX(${parallaxX}px) translateY(${parallaxY}px) translateZ(50px)`;
      content.style.transform = `translateX(${parallaxX / 2}px) translateY(${
        parallaxY / 2
      }px) translateZ(25px)`;

      // Add dynamic shadow based on rotation
      const shadowX = rotateY * 0.3;
      const shadowY = rotateX * -0.3;
      card.style.boxShadow = `
        ${shadowX}px ${shadowY + 8}px 25px rgba(0, 0, 0, 0.15),
        ${shadowX * 0.3}px ${shadowY + 3}px 15px rgba(59, 130, 246, 0.2)
      `;
    };

    const handleMouseEnter = () => {
      isHovered.current = true;
      card.style.transition =
        "transform 0.1s ease-out, box-shadow 0.1s ease-out";
      image.style.transition = "transform 0.1s ease-out";
      content.style.transition = "transform 0.1s ease-out";
    };

    const handleMouseLeave = () => {
      isHovered.current = false;
      card.style.transition =
        "transform 0.6s ease-out, box-shadow 0.6s ease-out";
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)";
      card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";

      image.style.transition = "transform 0.6s ease-out";
      content.style.transition = "transform 0.6s ease-out";
      image.style.transform = `translateX(0px) translateY(0px) translateZ(50px)`;
      content.style.transform = `translateX(0px) translateY(0px) translateZ(25px)`;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl border border-gray-200 flex flex-col h-full overflow-hidden cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Large Image Section - Takes up most of the card */}
      <div className="h-96 bg-white flex items-center justify-center p-6">
        <img
          ref={imageRef}
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain rounded-lg"
          style={{ transform: "translateZ(50px)" }}
        />
      </div>

      {/* Compact Content Section */}
      <div
        ref={contentRef}
        className="p-5 flex-shrink-0"
        style={{ transform: "translateZ(25px)" }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-4">
          {item.description}
        </p>

        {item.tags && (
          <div className="mb-2 flex flex-wrap gap-1">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
                style={{ transform: "translateZ(1px)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition text-sm"
            style={{ transform: "translateZ(2px)" }}
          >
            Link <ArrowRight className="ml-1 w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;

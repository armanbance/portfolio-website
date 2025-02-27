import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: {
    image: string;
    title: string;
    description: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl shadow-lg bg-white">
        <div className="relative aspect-video md:aspect-[16/9]">
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            {items[currentIndex].title}
          </h3>
          <p className="mt-2 text-gray-700">
            {items[currentIndex].description}
          </p>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

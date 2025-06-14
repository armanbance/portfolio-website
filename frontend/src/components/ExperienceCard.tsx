import React from "react";
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
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col h-full overflow-hidden transition-all duration-300 ease-out hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
      {/* Large Image Section - Takes up most of the card */}
      <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Compact Content Section */}
      <div className="p-6 flex-shrink-0">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
          {item.description}
        </p>

        {item.tags && (
          <div className="mb-3 flex flex-wrap gap-1">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
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
          >
            Link <ArrowRight className="ml-1 w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;

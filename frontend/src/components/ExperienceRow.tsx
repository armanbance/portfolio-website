import { ArrowUpRight } from "lucide-react";

interface Experience {
  image: string;
  title: string;
  subtitle?: string;
  year?: string;
  description: string;
  tags?: string[];
}

interface Props {
  item: Experience;
  index: number;
  total: number;
  isOpen: boolean;
  onToggle: () => void;
}

const ExperienceRow = ({ item, index, total, isOpen, onToggle }: Props) => {
  const number = String(index + 1).padStart(2, "0");
  return (
    <li
      className={`group relative border-t border-ink-900/15 transition-colors duration-500 ${
        index === total - 1 ? "border-b" : ""
      } ${isOpen ? "bg-ink-900/[0.02]" : ""}`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex items-baseline gap-6 md:gap-12 py-6 md:py-8 px-2 md:px-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-display font-light text-ink-900/40 text-2xl md:text-3xl tabular-nums w-12 md:w-16 shrink-0 transition-colors duration-500 group-hover:text-terracotta">
          {number}
        </span>

        <span className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-6">
          <span className="font-display text-2xl md:text-4xl font-normal text-ink-900 tracking-tight leading-tight transition-transform duration-500 ease-out group-hover:translate-x-1">
            {item.title}
          </span>
          {item.subtitle && (
            <span className="font-sans text-sm md:text-base text-ink-500 italic">
              {item.subtitle}
            </span>
          )}
        </span>

        {item.year && (
          <span className="hidden md:inline font-mono text-xs text-ink-500 tracking-wider uppercase shrink-0">
            {item.year}
          </span>
        )}
        <ArrowUpRight
          className={`shrink-0 w-5 h-5 md:w-6 md:h-6 text-ink-900/40 transition-all duration-500 group-hover:text-terracotta ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      <div className={`experience-row-detail ${isOpen ? "is-open" : ""}`}>
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-6 md:gap-12 px-2 md:px-4 pb-10 md:pb-12">
          <div className="relative overflow-hidden rounded-sm bg-cream-200 aspect-[4/3] md:aspect-auto md:h-80 order-last md:order-first">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-col justify-center pt-2 md:pt-0 md:pl-4">
            <p className="font-sans text-base md:text-lg text-ink-700 leading-relaxed max-w-prose">
              {item.description}
            </p>
            {item.tags && (
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] uppercase tracking-wider text-taupe"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExperienceRow;

import { ArrowUpRight } from "lucide-react";

interface Project {
  image: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  pullQuote?: string;
  accolade?: string;
}

interface Props {
  item: Project;
  variant?: "hero" | "wide" | "standard" | "tall";
  index?: number;
}

const ProjectTile = ({ item, variant = "standard" }: Props) => {
  const Wrapper = item.link ? "a" : "div";
  const anchorProps = item.link
    ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  const aspectClass =
    variant === "hero"
      ? "aspect-[16/8]"
      : variant === "tall"
      ? "aspect-[4/5]"
      : variant === "wide"
      ? "aspect-[16/10]"
      : "aspect-[4/3]";

  return (
    <Wrapper
      {...anchorProps}
      className="group relative block cursor-pointer"
    >
      <div
        className={`relative overflow-hidden rounded-sm bg-cream-200 ${aspectClass}`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-6 md:p-10 duotone-portrait transition-transform duration-[900ms] ease-out group-hover:scale-[1.015]"
        />
        {item.accolade && (
          <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-900 bg-cream-50/80 backdrop-blur-sm px-2.5 py-1.5 rounded-sm border border-ink-900/10">
            {item.accolade}
          </div>
        )}
        {item.link && (
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream-50/70 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 border border-ink-900/10">
            <ArrowUpRight className="w-4 h-4 text-ink-900" />
          </div>
        )}
      </div>

      <div className="mt-5 md:mt-6 grid md:grid-cols-[1fr_auto] gap-4 items-start">
        <div>
          <h3
            className="font-display text-2xl md:text-3xl text-ink-900 tracking-tight leading-tight"
            style={{
              transition:
                "filter 0.7s cubic-bezier(0.2,0.7,0.2,1), transform 0.7s cubic-bezier(0.2,0.7,0.2,1)",
            }}
          >
            <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1">
              {item.title}
            </span>
          </h3>
          <p className="mt-2 font-sans text-[15px] md:text-base text-ink-700 leading-relaxed max-w-prose">
            {item.description}
          </p>
          {item.tags && (
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-taupe"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {item.pullQuote && (
          <p className="hidden md:block font-display italic text-terracotta text-lg leading-snug max-w-[16ch] text-right pt-2">
            “{item.pullQuote}”
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default ProjectTile;

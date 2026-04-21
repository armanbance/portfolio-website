import { Link } from "react-scroll";
import MagneticLink from "./MagneticLink";

const navItems = [
  { name: "Work", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "About", to: "about" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={600}
            className="cursor-pointer select-none"
          >
            <MagneticLink as="span" strength={0.3} radius={90}>
              <span className="font-display text-3xl font-normal italic text-ink-900 tracking-tighter">
                ab
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-terracotta ml-1 align-middle" />
            </MagneticLink>
          </Link>

          <div className="flex items-center gap-8 md:gap-10">
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-40}
                  className="cursor-pointer select-none"
                  activeClass="is-active"
                >
                  <MagneticLink as="span" strength={0.25} radius={80}>
                    <span className="font-sans text-sm text-ink-900/80 hover:text-ink-900 transition-colors tracking-wide">
                      {item.name}
                    </span>
                  </MagneticLink>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/armanbance"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs uppercase tracking-[0.2em] text-ink-900/70 hover:text-terracotta transition-colors"
              >
                GH
              </a>
              <a
                href="https://www.linkedin.com/in/arman-bance/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs uppercase tracking-[0.2em] text-ink-900/70 hover:text-terracotta transition-colors"
              >
                LI
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

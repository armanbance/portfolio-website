import { Link } from "react-scroll";
import { Home, Briefcase, FolderGit2, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer"
            >
              Arman Bance
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {[
                { name: "Home", icon: Home, to: "home" },
                { name: "Experience", icon: Briefcase, to: "experience" },
                { name: "Projects", icon: FolderGit2, to: "projects" },
                { name: "About", icon: User, to: "about" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <a
                href="https://www.linkedin.com/in/arman-bance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"./LinkedIn.png"}
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://github.com/armanbance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={"./Github.png"} alt="Github" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

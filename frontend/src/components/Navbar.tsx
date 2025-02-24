import React from "react";
import { Link } from "react-scroll";
import { Home, Briefcase, FolderGit2, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Arman's Portfolio</span>
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

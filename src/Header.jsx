import { useState, useEffect } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const updateActiveSection = () => {
    const sections = ["home", "experience", "skills", "projects", "contact"];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(id);
        }
      }
    });
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <header>
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800/80 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <ul className="flex space-x-8 py-4 justify-center font-medium text-white text-lg">
        <li>
          <button
            onClick={() => handleScroll("home")}
            className={`relative transition-all hover:text-emerald-400 ${
              activeSection === "home" ? "text-emerald-400" : ""
            }`}
          >
            Home
            {activeSection === "home" && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-4 h-1 bg-emerald-400 rounded-full"></span>
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("experience")}
            className={`relative transition-all hover:text-emerald-400 ${
              activeSection === "experience" ? "text-emerald-400" : ""
            }`}
          >
            Experience
            {activeSection === "experience" && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-4 h-1 bg-emerald-400 rounded-full"></span>
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("skills")}
            className={`relative transition-all hover:text-emerald-400 ${
              activeSection === "skills" ? "text-emerald-400" : ""
            }`}
          >
            Skills
            {activeSection === "skills" && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-4 h-1 bg-emerald-400 rounded-full"></span>
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("projects")}
            className={`relative transition-all hover:text-emerald-400 ${
              activeSection === "projects" ? "text-emerald-400" : ""
            }`}
          >
            Projects
            {activeSection === "projects" && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-4 h-1 bg-emerald-400 rounded-full"></span>
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("contact")}
            className={`relative transition-all hover:text-emerald-400 ${
              activeSection === "contact" ? "text-emerald-400" : ""
            }`}
          >
            Contact
            {activeSection === "contact" && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-4 h-1 bg-emerald-400 rounded-full"></span>
            )}
          </button>
        </li>
      </ul>
    </nav></header>
  );
};

export default Nav;

import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const links = [
    "about",
    "skills",
    "projects",
    "internships",
    "education",
    "certifications",
    "achievements",
    "contact",
  ];

  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-blue-600 shadow-md"
    >
      <nav className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center py-4 px-2 text-white text-sm md:text-base font-medium items-center">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => goto(l)}
            className="capitalize px-3 py-1 hover:bg-blue-700 rounded transition"
          >
            {l}
          </button>
        ))}

        <button
          onClick={toggleTheme}
          className="ml-4 text-sm px-3 py-1 border border-white rounded hover:bg-blue-700 transition"
          title="Toggle light/dark mode"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </nav>
    </motion.header>
  );
}

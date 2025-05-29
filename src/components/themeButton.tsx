import { useTheme } from "@/context/themeContext";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full ${
        theme === "light" ? "bg-orange-300" : "bg-gray-700"
      }`}
    >
      <div
        className={`absolute flex scale-85 w-6 h-6 rounded-full ${
          theme === "light" ? `bg-red-500 translate-x-full ` : `bg-black left-0`
        } transition-all duration-500 transform justify-center items-center`}
      >
        {theme === "light" ? (
          <FaSun className="text-yellow-300" />
        ) : (
          <FaMoon className="text-blue-400" />
        )}
      </div>
    </div>
  );
};

export default ThemeButton;

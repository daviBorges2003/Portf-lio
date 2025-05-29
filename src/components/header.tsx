"use client";
import React, { useEffect } from "react";
import ThemeButton from "./themeButton";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import scrollToID from "@/utils/animations/scroll";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [menuMobile, setMenuMobile] = React.useState(false);
  gsap.registerPlugin(ScrollToPlugin);
  //Chama a Função de scroll
  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    if (targetId) scrollToID(targetId);
  };

  //Renderiza animação sempre que a pag é recarregada
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuMobile]);

  const toggleMenuMobile = () => {
    setMenuMobile(!menuMobile);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={`fixed z-50 flex justify-between h-15 p-5 w-full top-0 left-0 font-[family-name:var(--font-inter-sans)] transition duration-1000 items-center
        ${
          isOpen ? "shadow-md bg-white dark:bg-gray-900" : "bg-transparent py-4"
        }`}
    >
      <h1 className="text-xl md:text-2xl font-[family-name:var(--font-inter-sans)] font-bold">
        DB<span className="text-orange-400">#</span>
      </h1>
      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <a
            onClick={handleScrollLink}
            key={link.name}
            href={link.href}
            className=" hover:text-orange-400 font-[family-name:var(--font-roboto-sans)] font-semibold transition-colors "
          >
            {link.name}
          </a>
        ))}
        <ThemeButton />
      </div>
      <div className="flex items-center gap-4 md:hidden">
        <button
          onClick={toggleMenuMobile}
          className="fiztext-gray-700 dark:text-gray-300 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <IoMenuSharp className="size-5" />
        </button>
      </div>
      <div
        className={`fixed h-full z-50 top-0 right-0 md:hidden transform transition-transform duration-300 ease-in-out ${
          menuMobile ? "block" : "hidden"
        }`}
      >
        <div className="py-10 w-xs p-2 flex flex-col items-center gap-5 h-dvh space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          <button
            onClick={toggleMenuMobile}
            className="fiztext-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <IoCloseSharp className="size-5" />
          </button>
          <ThemeButton />
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block w-full p-2 rounded-xs text-base font-medium bg-gray-200 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300"
              onClick={() => setMenuMobile(false)}
              onClickCapture={handleScrollLink}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

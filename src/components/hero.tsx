"use client";
import scrollToID from "@/utils/animations/scroll";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const ScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToID("about");
  };

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power1.out" }
      );
    }
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero h-200 w-screen flex justify-center items-center flex-col gap-10 "
    >
      <h1 className="text-8xl font-[family-name:var(--font-poppins-sans)] font-black z-10 text-center">
        Davi{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          Borges
        </span>
      </h1>
      <p className="z-10">Transformando a ideias em realidade!</p>
      <span
        onClick={ScrollToAbout}
        className="flex items-center gap-2 bg-gradient-to-r  from-orange-400 to-red-500 p-4 rounded-full z-10 hover:cursor-pointer hover:from-red-400 transition-colors duration-700 "
      >
        <p className="text-xs font-medium text-white">Descubra mais</p>
        <FaArrowDown className="text-white" />
      </span>
      <IoIosArrowRoundDown className="animate-bounce text-5xl font-bold absolute bottom-4" />
      <div className="absolute w-90 h-90 rounded-full bg-yellow-200 dark:bg-yellow-100 blur-3xl opacity-50 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
    </section>
  );
};

export default Hero;

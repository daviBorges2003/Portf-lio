"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";
import Image from "next/image";

const Carroussel = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const total = projects.length;

  const maxIndex = total - 1;

  const startAutoSlide = () => {
    stopAutoSlide();

    if (total <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [projects.length]);

  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <div
      className="relative mx-auto w-full p-10"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
        ref={divRef}
        className="flex gap-10 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${
            index * ((divRef.current?.clientWidth ?? 0) + 40)
          }px)`,
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 bg-white dark:bg-gray-900 rounded-xl shadow-md flex flex-col justify-around overflow-hidden group hover:cursor-pointer transition-all duration-300"
          >
            <div className="relative w-full h-40">
              <div className="absolute w-full h-full bg-black opacity-20 z-40" />
              <div className="absolute w-full h-full z-40" />
              <Image
                fill
                objectFit="cover"
                objectPosition="center"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 z-30"
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
            <div className="z-50 bg-white dark:bg-gray-900 w-full h-full gap-3 flex flex-col items-start justify-around p-4">
              <h3 className="text-base font-bold">{project.title}</h3>
              <p className="text-gray-500 text-xs">{project.description}</p>
              <div className="flex gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-white bg-orange-600 hover:bg-orange-500 p-2 rounded-lg text-xs text-center font-semibold transition-colors duration-500"
                >
                  <MdOutlineWeb className="size-5" />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-900 hover:bg-blue-800 p-2 rounded-lg text-xs text-center font-semibold transition-colors duration-500"
                >
                  <FaGithub className="size-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {projects.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-6 bg-white hover:bg-orange-400 dark:bg-gray-950 rounded-full shadow p-2 dark:hover:bg-blue-950 transition hover:cursor-pointer z-40"
          >
            <IoArrowBackCircleOutline className="size-7" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-6 bg-white hover:bg-orange-400 dark:bg-gray-950 rounded-full shadow p-2 dark:hover:bg-blue-950 transition hover:cursor-pointer z-40"
          >
            <IoArrowForwardCircleOutline className="size-7" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carroussel;

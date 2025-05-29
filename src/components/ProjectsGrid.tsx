"use client";

import React from "react";
import { MdOutlineWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";
import Image from "next/image";

const ProjectsGrid = () => {
  return (
    <div className={`grid grid-cols-3 gap-4 transition-transform duration-500`}>
      {projects.map((project, i) => (
        <div
          key={i}
          className="w-full sm:w-full bg-white dark:bg-gray-900 rounded-xl shadow-md shrink-0 flex flex-col justify-around overflow-hidden group hover:cursor-pointer transition-all duration-300 m-auto"
        >
          <div className="relative w-full h-40 max-h-30">
            <div className="absolute w-full h-full bg-black opacity-20 z-40" />
            <div className="absolute w-full h-full z-40" />
            <Image
              fill
              objectFit="cover"
              objectPosition="center"
              className="w-full h-full object-cover group-hover:scale-130 transition-all duration-300 z-30"
              src={project.imageUrl}
              alt={project.title}
            />
            <div className="absolute w-full opacity-0 group-hover:opacity-100 bottom-2 left-2 z-50 flex gap-2">
              {project.tags.map((tag, i) => (
                <div
                  key={i}
                  className="bg-gray-950 opacity-85 hover:opacity-100 flex items-center text-center w-fit p-2 rounded-xs"
                >
                  <h1 className="text-[0.500rem] text-white">
                    {tag.toUpperCase()}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="z-50 bg-white dark:bg-gray-900 w-full h-full gap-3 flex flex-col items-start justify-around p-4">
            <h3 className="text-base font-bold">{project.title}</h3>
            <p className="text-gray-500 text-xs">{project.description}</p>
            <div className="flex gap-2">
              <a
                href={project.link}
                className="text-white bg-orange-600 hover:bg-orange-500 p-2 rounded-lg text-xs text-center font-[family-name:var(--font-roboto-sains)] font-semibold gap-1 transition-colors duration-500"
              >
                <MdOutlineWeb className="size-5" />
              </a>
              <a
                href={project.link}
                className="text-white bg-blue-900 hover:bg-blue-800 p-2 rounded-lg text-xs text-center font-[family-name:var(--font-roboto-sains)] font-semibold gap-1 transition-colors duration-500"
              >
                <FaGithub className="size-5" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;

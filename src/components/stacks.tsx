"use client";
import React from "react";
import { tecnologias } from "../data/tecnologias";
import { iconsMap } from "@/utils/icons/icons";

const Stacks = () => {
  return (
    <div id="tech" className="flex flex-col items-center w-full p-15 gap-5">
      <h1 className="font-[family-name:var[--font-poppins-sans]] text-2xl md:text-4xl font-semibold">
        Meus <span className="text-orange-400">Stacks</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 font-[family-name:var[--font-roboto-mono]] text-sm sm:text-lg">
        Tecnologias que eu uso para produzir meus projetos!
      </p>
      <div className="w-full flex items-center justify-center gap-5 flex-wrap">
        {tecnologias.map((tec) => {
          const IconComponent = iconsMap[tec.icon as keyof typeof iconsMap];

          return (
            <div
              key={tec.name}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group w-30 sm:w-50"
            >
              <div className={` top-0 left-0 w-full h-3 ${tec.color}`} />
              <div className="flex flex-col items-center p-4">
                <IconComponent className="size-13 text-gray-600 group-hover:text-orange-300 dark:text-gray-300 dark:group-hover:text-orange-400 transition-all duration-1000 mt-[10px] mb-[8px]" />
                <h3 className="font-[family-name:var[--font-roboto-mono]]">
                  {tec.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stacks;

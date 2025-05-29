import React from "react";
import Carroussel from "./carrousel";
import ProjectsGrid from "./ProjectsGrid";
import useWindowSize from "@/hooks/useWindowSize";

const Projetos = () => {
  const { width } = useWindowSize();

  return (
    <div
      id="projects"
      className="flex flex-col gap-10 items-center bg-gray-50 dark:bg-gray-800 shadow-md p-6 sm:p-10 w-screen mx-auto overflow-hidden"
    >
      <h1 className="font-[family-name:var[--font-poppins-sans]] text-2xl md:text-4xl font-semibold">
        Meus <span className="text-orange-400">Projetos</span>
      </h1>
      {width <= 700 ? <Carroussel /> : <ProjectsGrid />}
    </div>
  );
};

export default Projetos;

"use client";
import Image from "next/image";
import React from "react";
import avatar from "@/assets/images/FotoProgramador.png";
import { IoBookOutline } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";

const AboutMe: React.FC = () => {
  const topics = [
    {
      name: "Educação",
      description: "Cursando Sistemas de Informação UniFOA",
      icon: <IoBookOutline className="size-5 sm:size-7 text-blue-600" />,
      color: "bg-blue-300",
    },
    {
      name: "Desenvolvimento",
      description:
        "Desenvolvedor FullStack viciado em transformar ideias em realidade",
      icon: <FaCode className="size-5 sm:size-7 text-red-600" />,
      color: "bg-red-200",
    },
    {
      name: "Interesses",
      description: "Tecnologia, Engenharia de Software e Cloud Computing ",
      icon: <BsGlobe2 className=" size-5 sm:size-7 text-green-900" />,
      color: "bg-green-200",
    },
  ];

  return (
    <div
      id="about"
      className="flex gap-10 items-center justify-center bg-gray-50 dark:bg-gray-900 shadow-md p-15 flex-wrap transition"
    >
      <Image
        className="rounded-full border-4 border-white dark:border-gray-700 shadow-md"
        src={avatar}
        width={350}
        height={350}
        alt="avatar do programador"
      />
      <div className="md:w-3/5 flex flex-col gap-5">
        <h1 className="font-[family-name:var[--font-poppins-sans]] text-2xl md:text-4xl font-semibold">
          About <span className="text-orange-400">Me</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-[family-name:var[--font-roboto-mono]] text-sm sm:text-lg">
          Sou desenvolvedor FullStack, estudante de sistemas de informação, e
          totalmente apaixonado por transformar ideias em realidade e inovação!
        </p>
        {topics.map((topic) => (
          <div key={topic.name} className="flex justify-start gap-5">
            <div
              key={topic.name}
              className={`flex w-14 h-14 items-center justify-center ${topic.color} rounded-full`}
            >
              {topic.icon}
            </div>
            <div className="w-2/3 sm:w-full">
              <h1 className="font-semibold text-sm sm:text-base">
                {topic.name}
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm dark:text-gray-300">
                {topic.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

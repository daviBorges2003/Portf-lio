import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const data = [
    {
      label: "Github",
      icon: <FaGithub className="w-6 h-6" />,
      link: "https://github.com/daviBorges2003",
    },
    {
      label: "Linkedin",
      icon: <FaLinkedin className="w-6 h-6" />,
      link: "link",
    },
    {
      label: "Instagram",
      icon: <AiFillInstagram className="w-6 h-6" />,
      link: "Instagram",
    },
    {
      label: "Email",
      icon: <IoMail className="w-6 h-6" />,
      link: "mailto:davi.dePaula@outlook.com.br?subject=Gostei%20do%20seu%20Trabalho%21%20Podemos%20Conversar%3F",
    },
  ];
  return (
    <footer className="bg-gray-950 w-full h-50 p-8 text-gray-300 flex flex-wrap justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Davi <span className="to-orange-400 from-red-400">Borges</span>
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-7 items-center justify-center">
          {data.map((rs, i) => (
            <a
              key={i}
              href={rs.link}
              className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300 hover:text-gray-900"
              aria-label={rs.label}
            >
              {rs.icon}
            </a>
          ))}
        </div>
        <p className="text-xs font-extralight text-gray-500">
          @Direitos reservados a mim
        </p>
      </div>
    </footer>
  );
};

export default Footer;

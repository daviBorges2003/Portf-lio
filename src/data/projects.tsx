import img1 from "@/assets/images/imagem1.jpg";
import { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Plataforma de Gerenciamento de rota",
    description:
      "Projeto Full-Stack desenvolvido para o gerenciamento de Logistica do transporte",
    imageUrl: img1,
    tags: ["C#", ".NET Core", "React", "SQL Server"],
    link: "https://github.com/daviBorges2003/ProjectList",
  },
];

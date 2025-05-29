"use client";
import AboutMe from "@/components/aboutMe";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projetos from "@/components/projetos";
import Stacks from "@/components/stacks";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-roboto-mono)] font-normal  ">
      <Header />
      <main className=" font-[family-name:var(--font-roboto-mono)] font-light">
        <Hero />
        <AboutMe />
        <Stacks />
        <Projetos />
      </main>
      <Footer />
    </div>
  );
}

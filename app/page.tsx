"use client";

import Image from "next/image";
import { Introduction } from "./molecules/Introduction";
import { ListProjects } from "./molecules/ListProjects";
import { Skills } from "./molecules/Skills";
import { Header } from "./molecules/Header";
import { Hobbies } from "./molecules/Hobbies";
import { Career } from "./molecules/Career";
import { use, useEffect, useRef, useState } from "react";
import { useActiveSection } from "./stores/active-section";

export default function Home() {
  const ref = useDetectActiveSection();
  return (
    <main className="h-[100vh] flex flex-col overflow-y-hidden">
      <Header />

      <div
        ref={ref}
        className="snap-y snap-mandatory h-[100vh]  overflow-y-auto"
      >
        <Introduction />
        <Career />
        <Skills />
        <ListProjects />
      </div>
    </main>
  );
}

const useDetectActiveSection = () => {
  const { setActiveSection, activeSection } = useActiveSection();

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection || "intro");
      }
    };

    ref.current?.addEventListener("scroll", handleScroll);

    return () => ref.current?.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return ref;
};

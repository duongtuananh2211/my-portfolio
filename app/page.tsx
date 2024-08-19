import Image from "next/image";
import { Introduction } from "./molecules/Introduction";
import { ListProjects } from "./molecules/ListProjects";
import { Skills } from "./molecules/Skills";
import { Header } from "./molecules/Header";
import { Hobbies } from "./molecules/Hobbies";
import { Career } from "./molecules/Career";

export default function Home() {
  return (
    <main className="h-[100vh] flex flex-col">
      <Header />

      <div className="snap-y snap-mandatory flex-auto overflow-y-auto">
        <Introduction />
        <Career />
        <Skills />
        <ListProjects />
        <Hobbies />
      </div>
    </main>
  );
}

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Header } from "./components/layout/header";
import { ProjectsCards } from "./components/layout/projects-cards";

export default function Home() {
  return (
    <div className="main">
          <Header/>
          <section id="hero-section" className="flex flex-col md:flex-row items-center justify-center xl:gap-12 py-12 md:py-44">
            <div className="md:pl-12 lg:pl-0 flex flex-col items-center md:items-start max-w-sm xl:max-w-fit pb-6 md:pb-0">
              <h3 className="text-xl lg:text-2xl text-[#A7A7A7]">Hello World! 👋</h3>
              <h3 className="text-xl lg:text-2xl text-[#A7A7A7] pb-3">I'm Thainá and I'm a</h3>
              <h1 className="text-5xl lg:text-6xl font-bold text-center md:text-start pb-3">Full Stack Developer</h1>
              <span className="text-md">who also loves art and travelling!</span>
              <div className="flex md:flex-col lg:flex-row gap-2 pt-8">
                <button className="md:w-full lg:w-fit bg-primary py-2 px-12 border border-primary rounded-md font-medium cursor-pointer">Contact</button>
                <button className="md:w-full lg:w-fit py-2 px-8 border border-gray-700 rounded-md font-medium cursor-pointer">View Projects</button>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center max-w-xs max-h-xs xl:max-h-sm xl:max-w-sm">
              {/* Blurred Background */}
              {/* <div className="absolute size-80 blur-3xl rounded-full bg-primary"></div>*/}
              <Image
                src="/avatar.jpg"
                alt="Picture of Thainá"
                className="relative rounded-3xl"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section id="selected-work-section" className="pb-80 flex flex-col items-center justify-center pt-20 bg-muted-background">
            <h2 className="text-5xl font-medium mb-3">Selected Projects</h2>
            <p className="text-[#A7A7A7] text-lg font-poppins tracking-wide">A curated list of projects that showcase what I’ve being creating 🖌️👩‍💻</p>
            <div className="py-16">
              <ProjectsCards />
            </div>
            <a href="/" className="flex gap-1 items-center cursor-pointer">
              <span >View All</span>
              <ArrowRight className="w-5 h-5"/>
            </a>
          </section>
    </div>
  );
}

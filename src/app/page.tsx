import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AboutMeCards } from "./components/layout/about-me-cards";
import { Header } from "./components/layout/header";
import { ProjectsCards } from "./components/layout/projects-cards";
import { techStack } from "./database/tech-stack-data";

export default function Home() {
  return (
    <div className="main">
          <Header/>
          <section id="hero-section" className="flex flex-col md:flex-row items-center justify-center xl:gap-12 py-12 md:py-44">
            <div className="md:pl-12 lg:pl-0 flex flex-col items-center md:items-start max-w-sm xl:max-w-fit pb-6 md:pb-0">
              <h3 className="text-xl lg:text-2xl text-[#A7A7A7]">Hello World! 👋</h3>
              <h3 className="text-xl lg:text-2xl text-[#A7A7A7] pb-3">I'm Thainá and I'm a</h3>
              <h1 className="text-5xl lg:text-6xl font-bold text-center md:text-start pb-3">Full Stack Developer</h1>
              <span className="text-md">who also loves art, travelling, the nature and biking!</span>
              <div className="flex md:flex-col lg:flex-row gap-2 pt-8">
                <button className="md:w-full lg:w-fit bg-primary py-2 px-8 md:px-12 border border-primary rounded-md font-medium cursor-pointer text-sm md:text-base">Contact</button>
                <button className="md:w-full lg:w-fit py-2 px-3 md:px-8 border border-gray-700 rounded-md font-medium cursor-pointer text-sm md:text-base">View Projects</button>
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
          <section id="selected-work-section" className="flex flex-col items-center justify-center py-20 bg-muted-background">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Selected Projects</h2>
            <p className="text-[#A7A7A7] text-center md:text-lg max-w-4/5 font-poppins tracking-wide">A curated list of projects that showcase what I’ve being creating 🖌️👩‍💻</p>
            <div className="py-16">
              <ProjectsCards />
            </div>
            <a href="/" className="flex gap-1 items-center cursor-pointer">
              <span >View All</span>
              <ArrowRight className="w-5 h-5"/>
            </a>
          </section>
          <section id="skills-section" className="flex flex-col items-center justify-center py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">My Skills</h2>
            <p className="text-[#A7A7A7] text-center md:text-lg max-w-4/5 font-poppins tracking-wide">Technologies I’ve been working with and studying recently</p>
            <div className="grid grid-cols-4 lg:grid-cols-6 items-center gap-8 md:gap-20 py-18">
              {techStack.map((tech) => (
                <Image 
                  src={tech.src} 
                  width={100} 
                  height={100} 
                  alt="" 
                  className="w-12 h-12 md:w-20 md:h-20 xl:w-24 xl:h-24"
                />
              ))}
            </div>
            <a href="/" className="flex gap-1 items-center cursor-pointer">
              <span >View All</span>
              <ArrowRight className="w-5 h-5"/>
            </a>
          </section>
          <section id="about-me-section" className="flex flex-col items-center justify-center py-20 bg-muted-background">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Get to know me</h2>
            <p className="text-[#A7A7A7] md:text-lg max-w-4/5 text-center font-poppins tracking-wide">Besides being a developer, that are some more things I really love and that makes me, me!</p>
            <AboutMeCards />
          </section>
          <section id="get-in-touch-section" className="flex flex-col items-center justify-center py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Contact</h2>
            <p className="text-[#A7A7A7] md:text-lg max-w-4/5 text-center font-poppins tracking-wide">Places where you can find me!</p>
            <div className="flex gap-4 mt-10">
              <a href="https://linkedin.com/in/thainapires" target="_blank" className="transition-transform transform hover:scale-110">
                <FaLinkedin className="w-14 h-auto text-zinc-300 hover:text-sky-600"/>
              </a>
              <a href="/" target="_blank" className="transition-transform transform hover:scale-110">
                <IoMdMail className="w-14 h-auto text-zinc-300 hover:text-red-600"/>
              </a>
              <a href="https://github.com/thainapires" target="_blank" className="transition-transform transform hover:scale-110">
                <FaGithub className="w-14 h-auto text-zinc-300 hover:text-[#5C6BC0]"/>
              </a>
            </div>
          </section>
          <footer className="flex flex-col items-center justify-center mb-10">© 2025 Thainá Pires • Crafted with ❤️</footer>
    </div>
  );
}

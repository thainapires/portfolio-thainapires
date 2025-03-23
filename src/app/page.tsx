'use client';

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AboutMeCards } from "./components/cards/about-me-cards";
import { ProjectsCards } from "./components/cards/projects-cards";
import { techStack } from "./data/tech-stack-data";

export default function Home() {
  return (
    <div className="main">
          <section id="hero-section" className="flex flex-col md:flex-row items-center justify-center xl:gap-12 py-12 md:py-44">
            <div className="text-center flex flex-col items-center md:items-start pb-6 md:pb-0 m-5">
              <h1 className="2xl:mx-42 text-4xl md:text-5xl lg:text-6xl font-bold text-center pb-6 leading-12 md:leading-20">
                Hi <span className="wave-hover">👋</span> My name is Thainá
                and I'm a <span className="rounded-2xl p-1 bg-gradient-to-r from-purple-500 to-blue-500 whitespace-nowrap">Full Stack Developer</span>
              </h1>
              <span className="w-full text-sm md:text-lg text-center max-w-8/10 md:max-w-full">who also loves <span className="text-purple-400 font-bold">art 🎨</span>, <span className="text-sky-500 font-bold">travelling ✈️</span>, <span className="text-emerald-400 font-bold">the nature 🌱</span> and <span className="text-yellow-500 font-bold">biking 🚲</span></span>
              <div className="flex flex-row gap-2 pt-8 w-full items-center justify-center">
                <a href="/contact" className="bg-primary py-2 px-8 md:px-12 border border-primary rounded-md font-medium cursor-pointer text-sm md:text-base">Contact</a>
                <a href="/projects" className="py-2 px-3 md:px-8 border border-zinc-400 rounded-md font-medium cursor-pointer text-sm md:text-base">View Projects</a>
              </div>
            </div>
          </section>
          <section id="selected-work-section" className="flex flex-col items-center justify-center py-20 bg-muted-background">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Selected Projects</h2>
            <p className="text-[#A7A7A7] text-center md:text-lg max-w-4/5 font-poppins tracking-wide">A curated list of projects that showcase what I’ve being creating 🖌️👩‍💻</p>
            <div className="py-16">
              <ProjectsCards />
            </div>
            <a href="/projects" className="flex gap-1 items-center cursor-pointer hover:text-primary">
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
                  key={tech.id}
                  src={tech.src} 
                  width={100} 
                  height={100} 
                  alt="" 
                  className="w-12 h-12 md:w-20 md:h-20 xl:w-24 xl:h-24 hover:scale-125 duration-200"
                  />
              ))}
            </div>
            <a href="/skills" className="flex gap-1 items-center cursor-pointer hover:text-primary">
              <span >View All</span>
              <ArrowRight className="w-5 h-5"/>
            </a>
          </section>
          <section id="about-me-section" className="flex flex-col items-center justify-center py-20 bg-muted-background">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Get to know me</h2>
            <p className="text-[#A7A7A7] md:text-lg max-w-4/5 text-center font-poppins tracking-wide">Besides being a developer, there are many other passions that shape who I am and enrich my coding journey. These interests influence my creativity, problem-solving, and approach to development.</p>
            <AboutMeCards />
          </section>
          <section id="get-in-touch-section" className="flex flex-col items-center justify-center py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Contact</h2>
            <p className="text-[#A7A7A7] md:text-lg max-w-4/5 text-center font-poppins tracking-wide">Here's where you can find me!</p>
            <div className="flex gap-4 mt-10">
              <a href="https://linkedin.com/in/thainapires" target="_blank" className="transition-transform transform cursor-pointer hover:scale-110">
                <FaLinkedin className="w-14 h-auto text-zinc-300 hover:text-sky-600"/>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=thainaspiress@gmail.com&su=Let's Connect&body=Hi, Thainá! I'd love to get in touch!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform transform hover:scale-110 cursor-pointer"
              >
                <IoMdMail className="w-14 h-auto text-zinc-300 hover:text-red-600"/>
              </a>
              <a href="https://github.com/thainapires" target="_blank" className="transition-transform transform cursor-pointer hover:scale-110">
                <FaGithub className="w-14 h-auto text-zinc-300 hover:text-[#5C6BC0]"/>
              </a>
            </div>
          </section>
          <footer className="flex flex-col items-center justify-center mb-10">© 2025 Thainá Pires • Crafted with ❤️</footer>
    </div>
  );
}

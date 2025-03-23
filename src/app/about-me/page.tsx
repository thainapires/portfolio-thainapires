export default function AboutMe() {
  return (
    <main className="flex flex-col items-center justify-center">
        <div className="mt-20 w-full max-w-6xl mb-12">
          <h1 className="text-5xl lg:text-7xl font-medium text-center md:text-start pb-3 text-zinc-100">A little bit more about me</h1>
          <span className="text-gray-500">Lorem ipsum lorem impsum lorem</span>
        </div>
        <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
        <div className=" w-full max-w-6xl mt-12">
          <div className="pb-12">
            <div className="font-bold text-xl pb-5">Who I am</div>
            <div className="text-foreground/80">I'm Thainá (pronounced "Tienah"), a Full Stack Web Developer who believes in the perfect blend of code and creativity. I'm based in Rio de Janeiro, Brazil 🇧🇷</div>
          </div>

          <div className="pb-12">
            <div className="font-bold text-xl pb-5">What I do</div>
            <div className="text-foreground/80">Currently I'm working as a Full Stack Developer at @Rede Parcerias, a company that makes advantages clubs for corporate clients.</div>
          </div>

        </div>
    </main>
  );
}

import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <RevealOnScroll>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl mb-3 bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Junruhge Bellosillo
          </h1>
          <p className="text-gray-400 text-base md:text-sm leading-relaxed mb-4 max-w-md mx-auto">
            An Information Technology student majoring in Business Analysis in
            IT and Software Development, with a particular focus on software
            development. I aim to create innovative solutions that combine high
            performance with an exceptional user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="relative px-6 py-2 font-medium rounded text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_10px_#06b6d4,0_0_20px_#34d399,0_0_30px_#06b6d4]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="relative px-6 py-2 font-medium rounded border-2 border-emerald-600 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:border-emerald-400 hover:text-white hover:shadow-[0_0_10px_#06b6d4,0_0_20px_#34d399]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

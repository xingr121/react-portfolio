import { RevealOnScroll } from "../RevealOnScroll";
import Particlesbg from "../Particlesbg";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <Particlesbg />
      <RevealOnScroll>
        <div className="text-center z-10 ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Xing
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto px-6 ">
            As an aspiring full-stack developer, I’m fueled by a strong
            curiosity for technology and a passion for continuous learning. With
            a sharp eye for detail and a commitment to quality, I strive to
            deliver impactful solutions to real-world challenges.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#60F0D0]/50 text-[#60F0D0] py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="rounded-xl p-8 ">
            <p className="text-gray-300 mb-6">
              Here you will find a diverse collection of my projects,
              demonstrating my journey into the world of programming, covering a
              variety of technologies and systems development skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">LinguoSphère</h3>
              <p className="text-gray-400 mb-4">
                a VR and AI-driven language learning platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Openai",
                  "Astro",
                  "Tailwind",
                  "Threejs",
                  "supabase",
                  "wordpress",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-purple-400 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/xingr121/"
                  className="text-[#60F0D0] hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Airbnb clone</h3>
              <p className="text-gray-400 mb-4">
                a web app mimicking Airbnb's core functionality
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "MUI",
                  "Node.js",
                  "AWS",
                  "Heroku",
                  "Stripe",
                  "Google map API",
                  "Auth0",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/xingr121/airbnb-clone-mern-fullstack"
                  className="text-[#60F0D0] hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Recipe website</h3>
              <p className="text-gray-400 mb-4">a recipe-sharing website.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "MySQL", "AWS EC2", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-purple-400 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/xingr121/recipe-website"
                  className="text-[#60F0D0] hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Spring Boot Microservice Project
              </h3>
              <p className="text-gray-400 mb-4">
                a real-time microservices architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Spring Boot", "Spring Cloud", "Kafka"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-purple-400 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/xingr121/"
                  className="text-[#60F0D0] hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

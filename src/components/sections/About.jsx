import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Html",
    "CSS",
    "TypeScript",
    "TailwindCSS",
    "React",
    "Angular",
  ];

  const backendSkills = [
    "Node.js",
    "Java Spring",
    "Python",
    "ASP.NET",
    "Laravel",
    "GraphQL",
  ];
  const databaseSkills = [
    "MySQL",
    "SQL Server",
    "PostgresSQL",
    "MongoDB",
    "JEntity Framework",
    "Supabase",
  ];
  const cloudSkills = [
    "AWS (EC2, RDS, S3, Lambda)",
    "Azure",
    "Docker",
    "Git",
    "Jenkins",
    "SonarQube",
  ];
  const toolSkills = [
    "Figma",
    "Jira",
    "Postman",
    "Stripe API",
    "Auth0",
    "Google Maps API",
    "Three.js",
    "Shaders",
    "WordPress",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-400 mb-6">
              passionate developer with a strong focus on building scalable web
              applications and crafting innovative solutions. I'm well-versed in
              a variety of programming technologies and constantly expanding my
              skill set to stay at the forefront of development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-400">
                  {" "}
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10  text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-400">
                  {" "}
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-400">
                  Database Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {databaseSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-400">
                  Cloud & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cloudSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10  text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-400">
                  Other Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10  text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

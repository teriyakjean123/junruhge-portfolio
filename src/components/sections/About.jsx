import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Redux",
    "HTML",
    "Expo",
    "React Native",
    "Tailwindcss",
    "Bootstrap",
    "CSS",
    "JQUERY",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Appwrite",
    "Apache",
    "MySQL",
    "PHP",
    "Python",
    "REST API",
    "Authentication & Authorization",
    "CRUD Operations",
  ];

  const devTools = ["XAMPP", "Git", "GitHub", "Postman", "VS Code", "Expo Go"];

  const networkingSkills = [
    "Cisco Networking",
    "LAN/WAN Setup",
    "Network Troubleshooting",
  ];

  const hardwareSkills = [
    "PC Assembly",
    "Component Installation",
    "Peripheral Setup",
    "Troubleshooting",
  ];

  const SkillTag = ({ name }) => (
    <span className="px-3 py-1 text-sm font-medium bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-400/30">
      {name}
    </span>
  );

  return (
    <RevealOnScroll>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate software developer specializing in web, mobile, and
              desktop applications, with a focus on delivering high-performance
              and user-friendly solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-[#111]">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2 justify-start max-w-full">
                  {frontendSkills.map((tech) => (
                    <SkillTag key={tech} name={tech} />
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-[#111]">
                <h3 className="text-xl font-bold mb-4 text-green-400">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2 justify-start max-w-full">
                  {backendSkills.map((tech) => (
                    <SkillTag key={tech} name={tech} />
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-[#111]">
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  Dev Tools
                </h3>
                <div className="flex flex-wrap gap-2 justify-start max-w-full">
                  {devTools.map((tool) => (
                    <SkillTag key={tool} name={tool} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-[#111]">
                <h3 className="text-xl font-bold mb-4 text-purple-400">
                  Networking Skills
                </h3>
                <div className="flex flex-wrap gap-2 justify-start max-w-full">
                  {networkingSkills.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-[#111]">
                <h3 className="text-xl font-bold mb-4 text-orange-400">
                  Hardware Skills
                </h3>
                <div className="flex flex-wrap gap-2 justify-start max-w-full">
                  {hardwareSkills.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg transition-all bg-[#111] flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                🏫 Education
                <div className="mt-10">
                  <h4 className="text-lg font-semibold text-white">
                    Bachelor of Science in Information Technology
                  </h4>
                  <p className="text-gray-400 text-sm mt-3">
                    University of Iloilo | 2022 - 2026
                  </p>
                </div>
              </h3>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg transition-all bg-[#111] flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4 text-pink-400">
                💼 Work Experience
                <div className="mt-10">
                  <h4 className="text-lg font-semibold text-white">
                    Freelance Software Developer
                  </h4>
                  <p className="text-gray-400 text-sm mt-3">2023 - 2025</p>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

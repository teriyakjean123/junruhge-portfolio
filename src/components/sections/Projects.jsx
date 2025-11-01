import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Zarian eCommerce (Full-Stack MERN)",
      description:
        "A full-featured eCommerce platform built using the MERN stack with secure user authentication, admin management, and dynamic product handling. The backend implements hardened middleware with Helmet, sanitized input using sanitize-html, and custom CORS control to prevent XSS, CSRF, and NoSQL injection attacks. Integrated JWT authentication with HTTP cookies, device-based validation, and Cloudinary image uploads ensure robust and secure operations.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Firebase",
        "JWT Auth",
        "HTTP Cookies",
        "Helmet",
        "sanitize-html",
        "Custom CORS",
        "Cloudinary",
        "Streamifier",
        "Postman",
        "Nodemon",
        "dotenv",
        "bcrypt.js",
        "Git",
        "Github",
      ],
    },
    {
      title: "TIN Blogs (React Native / Expo)",
      description:
        "A mobile blogging platform for Android built with Expo Router and Appwrite backend integration. Features authentication, post management, and offline bookmarks stored using AsyncStorage.",
      stack: [
        "React Native",
        "Expo Router",
        "Appwrite (REST SDK)",
        "AsyncStorage",
        "React Hooks",
        "TailwindCSS (NativeWind)",
        "VideoView & WebView",
        "Appwrite Authentication",
        "Appwrite Database",
      ],
    },
  ];

  const previousWork = [
    {
      title: "Old Project 1",
      description:
        "Completed a web project exploring JavaScript and PHP. Code unavailable due to system reformat.",
    },
    {
      title: "Old Project 2",
      description:
        "Created a small Python desktop application for learning purposes. Code unavailable due to system reformat.",
    },
  ];

  const StackTag = ({ name }) => (
    <span className="px-3 py-1 text-sm font-medium bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-400/30">
      {name}
    </span>
  );

  return (
    <RevealOnScroll>
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-[#0d0d0d] rounded-xl border border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3">
                  {project.description}
                </p>

                {project.stack && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                      Tech Stack Summary
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <StackTag key={i} name={tech} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Coming Soon / Previous Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {previousWork.map((project, index) => (
              <div
                key={index}
                className="group bg-[#0d0d0d] rounded-xl border border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

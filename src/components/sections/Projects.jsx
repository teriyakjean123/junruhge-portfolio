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
      title: "Hectic Blogs (React/Node.js)",
      description:
        "A blogging platform featuring authentication, CRUD posts, and image uploads.",
      stack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "JWT",
        "bcrypt.js",
        "dotenv",
        "Multer",
        "CORS",
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

    {
      title: "Zabong Hotel Booking Management System",
      description:
        "A hotel booking system with dynamic reservation tracking and admin dashboard.",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP MySQL"],
    },
    {
      title: "Saiko Instrument eCommerce",
      description:
        "An online store for musical instruments featuring cart and checkout functions.",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP MySQL"],
    },
    {
      title: "Library Inventory System",
      description:
        "A library management system for book cataloging and user tracking.",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP MySQL"],
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
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

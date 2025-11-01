export const Footer = () => {
  return (
    <footer className="mt-20 py-10 text-center border-t border-white/10">
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/teriyakjean123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-emerald-400 transition-all hover:scale-110"
        >
          <i className="ri-github-fill text-3xl"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/junruhge-bellosillo-3500aa323"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-emerald-400 transition-all hover:scale-110"
        >
          <i className="ri-linkedin-box-fill text-3xl"></i>
        </a>
      </div>

      <p className="text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

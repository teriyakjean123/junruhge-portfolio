import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Loading />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-b from-black via-neutral-950 to-black text-gray-100 font-grotesk">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-8">
        {text}
        <span className="animate-pulse text-emerald-400 ml-2">...</span>
      </h1>

      <div className="relative w-56 h-1.5 rounded-full bg-neutral-800 overflow-hidden shadow-inner">
        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 animate-loading-bar" />
      </div>

      <p className="mt-6 text-sm text-gray-400 tracking-wide">
        Preparing my experience
      </p>
    </div>
  );
};

import { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Toaster, toast } from "sonner";

export const Contacts = () => {
  const formRef = useRef();
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBIC_KEY = import.meta.env.VITE_PUBIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBIC_KEY).then(
      () => {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you soon!",
        });
        formRef.current.reset();
      },
      (error) => {
        console.error("Failed to send message:", error);
        toast.error("Failed to send message", {
          description: "Please try again.",
        });
      }
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-6"
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0d1117",
            color: "#e5e7eb",
            border: "1px solid rgba(6,182,212,0.4)",
            boxShadow: "0 0 15px rgba(6,182,212,0.3)",
          },
          className: "backdrop-blur-md",
        }}
      />

      <RevealOnScroll>
        <div className="max-w-5xl w-full px-10">
          <h2 className="text-5xl font-bold mb-16 text-center bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#0d0d0d] p-14 rounded-3xl border-2 border-cyan-400/20 shadow-[0_0_40px_rgba(0,255,255,0.15)]"
          >
            <div className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-cyan-400 mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-6 py-3 text-lg bg-black/40 border border-cyan-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-200 placeholder-gray-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-cyan-400 mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className="w-full px-6 py-3 text-lg bg-black/40 border border-cyan-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-200 placeholder-gray-500 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-8">
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-cyan-400 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  required
                  placeholder="Write your message..."
                  className="w-full px-6 py-3 text-lg bg-black/40 border border-cyan-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-200 placeholder-gray-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="relative inline-block px-14 py-4 font-semibold text-xl rounded-lg border border-cyan-400/50 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 hover:-translate-y-0.5 hover:shadow-[0_0_20px_#06b6d4,0_0_40px_#34d399,0_0_60px_#06b6d4] transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
            <input type="hidden" name="title" value="Portfolio Contact Form" />
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

 // src/Pages/About.jsx
import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
        {/* Left: Text */}
        <section>
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400 mb-3">
            About
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Hi, I build modern web experiences.
          </h1>
          <p className="text-slate-300 mb-3">
            A self‑taught web developer and content creator, focused on building
            fast, responsive, and SEO‑friendly websites that actually help
            businesses grow online.
          </p>
          <p className="text-slate-400 mb-6">
            From designing UI components in React to optimizing content for
            search engines, the goal is simple: create digital experiences that
            look good and perform even better.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-800 text-xs border border-slate-700">
              React & Tailwind
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-xs border border-slate-700">
              SEO & Content
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-xs border border-slate-700">
              JS & APIs
            </span>
          </div>
        </section>

        {/* Right: Card */}
        <aside className="flex justify-center">
          <div className="w-full max-w-sm bg-slate-800 rounded-2xl border border-slate-700 shadow-xl shadow-black/40 px-6 py-7 text-center">
            <img
              src="https://via.placeholder.com/140"
              alt="Profile"
              className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-amber-400 shadow-md shadow-amber-500/40"
            />
            <h2 className="mt-4 text-xl font-semibold">Your Name</h2>
            <p className="text-sm text-amber-300 font-medium mt-1">
              Web Developer & Content Creator
            </p>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Crafting clean UIs, optimized content, and smooth user
              experiences for the modern web.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default About;

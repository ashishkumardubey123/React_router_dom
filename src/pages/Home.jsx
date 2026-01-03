// src/Pages/Home.jsx
import { Link } from 'react-router-dom'; // If using React Router

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 md:pt-32 md:pb-28 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-slate-900/50" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400 mb-3">
            Welcome to MonarkFX
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-slate-100 to-amber-200 bg-clip-text text-transparent leading-tight">
            Freelance Web Developer
            <br />
            <span className="text-amber-400">& Content Creator</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Building fast, SEO-optimized websites with React, Tailwind, and modern tools. Creating engaging bilingual content for your digital growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-amber-400 text-slate-900 font-semibold rounded-xl hover:bg-amber-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 text-lg"
            >
              View Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-slate-700 rounded-xl hover:bg-slate-800 hover:border-amber-400 transition-all duration-300 text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            What I Do
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="text-center p-8 rounded-2xl bg-slate-900/50 border border-slate-700 hover:bg-slate-900 hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-slate-400">React, Vite, Tailwind sites that load fast and rank high.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-slate-900/50 border border-slate-700 hover:bg-slate-900 hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">SEO & Content</h3>
              <p className="text-slate-400">Optimized content in Hindi/English for better visibility.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-slate-900/50 border border-slate-700 hover:bg-slate-900 hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold mb-3">Reels & Videos</h3>
              <p className="text-slate-400">Instagram-ready content with thumbnails and editing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Let's discuss how to bring your vision to life with clean code and smart strategy.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-2xl text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
          >
            Start Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

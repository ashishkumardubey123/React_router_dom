// src/Pages/Services.jsx
import { Link } from 'react-router-dom'; // For navigation

const services = [
  {
    title: "Web Development",
    desc: "Custom React websites with Vite, Tailwind, and modern JS. Fast, responsive, and SEO-ready.",
    icon: "💻",
    link: "/services/webdevelopment",
    color: "from-blue-400 to-blue-500"
  },
  {
    title: "SEO Optimization",
    desc: "On-page SEO, meta tags, content strategy, and performance audits to boost your search rankings.",
    icon: "🔍",
    link: "/services/seo",
    color: "from-green-400 to-green-500"
  },
  {
    title: "Content Creation",
    desc: "Bilingual (Hindi/English) reels, videos, blogs, and thumbnails for Instagram and websites.",
    icon: "🎥",
    link: "/services/content",
    color: "from-purple-400 to-purple-500"
  },
  {
    title: "UI/UX Design",
    desc: "Modern, user-friendly designs with Tailwind CSS. Cards, forms, and responsive layouts.",
    icon: "🎨",
    link: "#",
    color: "from-pink-400 to-pink-500"
  },
  {
    title: "API Integration",
    desc: "Connect your site to external APIs, handle data fetching, and build dynamic features.",
    icon: "🔗",
    link: "#",
    color: "from-indigo-400 to-indigo-500"
  },
  {
    title: "Consulting",
    desc: "Project planning, code reviews, and biotech/digital media strategy for your business.",
    icon: "🧠",
    link: "#",
    color: "from-amber-400 to-amber-500"
  }
];

const Services = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400 mb-3">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Complete Digital Solutions
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Full-stack web development, SEO optimization, and content creation to grow your online presence.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br bg-opacity-0 group-hover:bg-opacity-100 group-hover:bg-gradient-to-br transition-all duration-700" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`, '--tw-gradient-from': service.color.split(' ')[1], '--tw-gradient-to': service.color.split(' ')[2] }} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed relative z-10">
                  {service.desc}
                </p>
                <Link
                  to={service.link}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 relative z-10 group-hover:translate-y-1"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-2xl text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Services;

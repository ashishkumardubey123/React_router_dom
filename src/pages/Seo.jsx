// src/Pages/SEO.jsx
const features = [
  { icon: "🔍", title: "Keyword Research", desc: "Find high-value Hindi/English keywords your audience searches." },
  { icon: "📝", title: "On-Page SEO", desc: "Meta tags, headings, alt text, and content optimization." },
  { icon: "⚙️", title: "Technical Audit", desc: "Site speed, mobile-friendliness, schema markup, and crawl errors." },
  { icon: "📱", title: "Local SEO", desc: "Google My Business, citations, and location targeting for MP/India." },
  { icon: "📊", title: "Analytics Setup", desc: "Google Analytics, Search Console, and performance tracking." },
  { icon: "✍️", title: "Content Strategy", desc: "Bilingual content plans that rank and convert." }
];

const processSteps = [
  "Free SEO Audit",
  "Keyword Research",
  "On-Page Fixes",
  "Content Creation",
  "Link Building",
  "Results & Monitor"
];

const testimonials = [
  { quote: "Traffic doubled in 3 months with targeted keywords!", author: "Local Business" },
  { quote: "Top Google rankings for competitive terms.", author: "Ecommerce Client" }
];

const SEO = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400 mb-3">
            SEO Services
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Rank Higher on Google
            <br />
            <span className="text-amber-400">With Proven SEO</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Organic traffic growth through technical audits, bilingual content, and local SEO for Indian businesses.
          </p>
          <Link 
            to="/Contact"
            className="inline-block px-8 py-4 bg-amber-400 text-slate-900 font-semibold rounded-xl hover:bg-amber-300 transition shadow-lg hover:shadow-xl"
          >
            Free SEO Audit
          </Link>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-16">Complete SEO Package</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:shadow-xl hover:shadow-amber-500/20 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20 bg-slate-800/50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">6-Step SEO Roadmap</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From audit to top rankings, every step tracked.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex-1 text-center p-6 bg-slate-900 rounded-2xl border border-slate-700 hover:border-amber-400 transition group">
                <div className="w-10 h-10 bg-amber-400 text-slate-900 font-bold rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                  {idx + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Results Speak</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <p className="text-slate-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-amber-400 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Boost Your Rankings Today</h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Get a free technical SEO audit and personalized strategy.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-2xl text-lg hover:shadow-2xl transition"
          >
            Claim Free Audit
          </a>
        </section>
      </div>
    </main>
  );
};

export default SEO;

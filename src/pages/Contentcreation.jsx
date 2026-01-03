// src/Pages/ContentCreation.jsx
const portfolioItems = [
  {
    type: "Reel",
    title: "Web Dev Tutorial",
    platform: "Instagram",
    thumb: "https://via.placeholder.com/300x500/1e293b/amber-400?text=Reel+1",
    desc: "15-sec React hooks explainer (50K+ views)"
  },
  {
    type: "Video",
    title: "SEO Basics Hindi",
    platform: "YouTube",
    thumb: "https://via.placeholder.com/400x225/1e293b/amber-400?text=Video+1",
    desc: "Complete SEO guide for beginners (Hindi)"
  },
  {
    type: "Blog",
    title: "Tailwind Tips",
    platform: "Website",
    thumb: "https://via.placeholder.com/400x250/1e293b/amber-400?text=Blog+1",
    desc: "10 Tailwind utilities every dev needs"
  }
];

const servicesList = [
  "Instagram Reels (Hindi/English)",
  "YouTube Shorts & Videos",
  "Thumbnail Design",
  "Blog & Website Content",
  "Educational Explainers",
  "Script Writing"
];

const processSteps = [
  "Idea & Script",
  "Filming/Recording",
  "Editing & Effects",
  "Thumbnail Design",
  "Optimization & Post",
  "Analytics Review"
];

const ContentCreation = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400 mb-3">
            Content Creation
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Engaging Videos & Reels
            <br />
            <span className="text-amber-400">That Get Views</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Bilingual (Hindi/English) Instagram reels, YouTube videos, thumbnails, and blog content for education, tech, and business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-400 text-slate-900 font-semibold rounded-xl hover:bg-amber-300 transition shadow-lg hover:shadow-xl"
          >
            Order Content
          </a>
        </section>

        {/* Portfolio */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-16">Recent Work</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:shadow-xl hover:shadow-amber-500/20 transition">
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-sm text-amber-400">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.platform}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Content Types</h2>
          <div className="grid gap-4 max-w-2xl mx-auto">
            {servicesList.map((service, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-amber-400 transition">
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20 bg-slate-800/50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">From Script to Viral</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Complete content production workflow.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
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

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Need Viral Content?</h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Custom reels, videos, or blogs tailored to your brand and audience.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-2xl text-lg hover:shadow-2xl transition"
          >
            Create My Content
          </a>
        </section>
      </div>
    </main>
  );
};

export default ContentCreation;

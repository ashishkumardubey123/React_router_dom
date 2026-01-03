// src/Pages/NotFound.jsx
import { Link } from 'react-router-dom'; // If using React Router

const NotFound = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <div className="text-8xl md:text-9xl font-black text-slate-800 absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
            404
          </div>
          <div className="text-8xl md:text-9xl font-black text-slate-700">404</div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-100">
            Page Not Found
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-amber-400 text-slate-900 font-semibold py-4 px-6 rounded-xl hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 text-lg"
          >
            Go to Home
          </Link>
          <Link
            to="/services"
            className="block w-full border-2 border-slate-700 py-4 px-6 rounded-xl hover:bg-slate-800 hover:border-amber-400 transition-all duration-300"
          >
            View Services
          </Link>
        </div>

        {/* Illustration */}
        <div className="text-6xl">🚀</div>
      </div>
    </main>
  );
};

export default NotFound;

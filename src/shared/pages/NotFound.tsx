import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="relative mb-8">
          <h1 className="text-[12rem] font-black text-primary/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-900">Lost?</h2>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! Page not found
        </h3>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transform hover:-translate-y-1 active:scale-95"
        >
          <Home size={22} />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

import { profile } from "../data/profile";
import { motion } from "framer-motion";
import profilePhoto from "../assets/Pic.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[80vh] flex items-center justify-center text-center md:text-left bg-gradient-to-br from-brand-50 to-white dark:from-gray-900 dark:to-gray-800 px-4"
    >
      {/* 🔺 Floating Triangle Shapes */}
      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[150px] border-l-transparent border-t-[150px] border-t-blue-300 dark:border-t-blue-500 opacity-30 animate-float-slow z-[-1]" />
      <div className="absolute bottom-10 left-20 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-indigo-200 dark:border-t-indigo-500 opacity-20 rotate-12 animate-float z-[-1]" />

      {/* 👤 Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Photo */}
        <motion.img
          src={profilePhoto}
          alt="Hariprasad"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-brand-600 dark:border-brand-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="text-xl text-brand-600 dark:text-brand-400 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {profile.role}
          </motion.p>

          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Turning complex problems into creative, scalable web solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="/Hariprasad_A_K_Resume.pdf"
              download
              className="px-6 py-3 bg-brand-600 text-white rounded-md hover:bg-brand-700 transition"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-brand-600 text-brand-600 rounded-md hover:bg-brand-600 hover:text-white transition dark:border-brand-400 dark:text-brand-400 dark:hover:bg-brand-400 dark:hover:text-gray-900"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

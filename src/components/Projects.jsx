import { profile } from "../data/profile";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profile.projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{proj.name}</h3>
            {!!proj.period && (
              <p className="text-sm text-gray-500 mb-2">{proj.period}</p>
            )}
            <p className="text-gray-700 dark:text-gray-300">{proj.desc}</p>
            {proj.stack?.length > 0 && (
              <p className="text-sm text-blue-500 mt-3">
                <strong>Tech Stack:</strong> {proj.stack.join(", ")}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

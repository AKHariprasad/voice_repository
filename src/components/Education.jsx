import { profile } from "../data/profile";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="max-w-5xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>

      <ul className="space-y-6">
        {profile.education.map((ed, idx) => (
          <motion.li
            key={idx}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-brand-600 dark:text-brand-400">
              {ed.degree}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{ed.institute}</p>
            <p className="text-sm text-gray-500">{ed.year}</p>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

import { profile } from "../data/profile";
import { motion } from "framer-motion";

export default function Internships() {
  return (
    <motion.section
      id="internships"
      className="max-w-5xl mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Internships</h2>

      <div className="space-y-8">
        {profile.internships.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-1">
              {item.title} <span className="text-gray-700 dark:text-gray-300">@ {item.company}</span>
            </h3>
            <p className="text-sm text-gray-500 mb-3">{item.period}</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {item.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

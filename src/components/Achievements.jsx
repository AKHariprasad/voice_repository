import { profile } from "../data/profile";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="max-w-5xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Achievements</h2>

      <motion.ul
        className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {profile.achievements.map((a, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {a}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

import { profile } from "../data/profile";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-4">About</h2>
      <p className="text-gray-700 dark:text-gray-200 leading-7">
        {profile.objective}
      </p>
    </motion.section>
  );
}

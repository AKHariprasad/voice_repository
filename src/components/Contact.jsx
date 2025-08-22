import { profile } from "../data/profile";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>

      <motion.div
        className="space-y-4 text-gray-800 dark:text-gray-200 text-center"
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
        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        >
          <span className="font-semibold">Email:</span>{" "}
          <a className="text-blue-600 underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        >
          <span className="font-semibold">Phone:</span> {profile.phone}
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        >
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            className="text-blue-600 underline"
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            {profile.linkedin}
          </a>
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        >
          <span className="font-semibold">Location:</span> {profile.location}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

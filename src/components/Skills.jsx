import { profile } from "../data/profile";
import { motion } from "framer-motion";

export default function Skills() {
  const s = profile.skills;

  const Item = ({ title, list, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300">
        {list && list.length ? list.join(", ") : "-"}
      </p>
    </motion.div>
  );

  return (
    <motion.section
      id="skills"
      className="max-w-5xl mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Item title="Languages" list={s.languages} delay={0.1} />
        <Item title="Web" list={s.web} delay={0.2} />
        <Item title="Frontend" list={s.frontend} delay={0.3} />
        <Item title="Backend" list={s.backend} delay={0.4} />
        <Item title="Tools" list={s.tools} delay={0.5} />
        <Item title="Data & Visualization" list={s.dataViz} delay={0.6} />
        <Item title="Practices" list={s.practices} delay={0.7} />
      </div>
    </motion.section>
  );
}

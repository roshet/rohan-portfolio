import { motion } from "framer-motion";
import { skills } from "../data/skills";

const colorMap = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
  gray: "bg-[#1e293b] border-white/5 text-gray-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2 text-center"
        >
          Toolkit
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-white text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="space-y-10">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <p className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                    className={`px-4 py-1.5 rounded-full text-sm border ${colorMap[group.color]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

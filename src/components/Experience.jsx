import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2 text-center"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-white text-center mb-16"
        >
          Where I've Worked
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-8 flex justify-center pt-1.5">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i === 0
                        ? "bg-gradient-to-br from-blue-500 to-purple-500"
                        : "bg-[#1e293b] border-2 border-[#334155]"
                    }`}
                  />
                </div>

                <div className="pb-2">
                  <div className="text-white font-bold text-lg leading-tight">{item.role}</div>
                  <div className="text-blue-400 font-medium text-sm mb-1">{item.company}</div>
                  <div className="text-gray-500 text-xs mb-3">{item.period}</div>
                  <ul className="space-y-1.5">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

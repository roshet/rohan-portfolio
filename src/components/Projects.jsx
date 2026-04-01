import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 cursor-default hover:border-blue-500/30 transition-colors duration-300"
    >
      {project.featured && (
        <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-3">★ Featured</p>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-[#1e293b] border border-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-400 hover:text-blue-300 transition"
      >
        View on GitHub →
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2 text-center"
        >
          Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-white text-center mb-16"
        >
          Things I've Built
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

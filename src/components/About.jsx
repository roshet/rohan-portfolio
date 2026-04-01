import { motion } from "framer-motion";
import photo from "../assets/photo.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-blue-500/30 ring-4 ring-blue-500/10">
              <img src={photo} alt="Rohan Shetty" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl font-black text-white mb-4">
              Builder at heart, CS student by training.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a Computer Science student at the University of Cincinnati (Class of 2027) with three
              internships under my belt — spanning data engineering, SQL pipelines, and test automation.
              I love building things end-to-end: from a deployed FastAPI backend to a React Native frontend.
              Currently looking for Summer 2026 co-op/internship opportunities.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/roshet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/rohan-shetty-525a61248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:shettyrv@mail.uc.edu" className="text-gray-400 hover:text-white transition text-sm">
                Email ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

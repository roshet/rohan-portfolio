import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#1e1b4b]/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-white mb-4"
        >
          Let's work together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-10"
        >
          Open to internships, co-ops, and interesting projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="mailto:shettyrv@mail.uc.edu"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            Send Email
          </a>
          <a
            href="https://github.com/roshet"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rohan-shetty-525a61248/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

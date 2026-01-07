import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl hover:scale-[1.02] transition"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-700 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

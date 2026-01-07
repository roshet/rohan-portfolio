import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl hover:scale-[1.02] transition"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {skillGroup.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

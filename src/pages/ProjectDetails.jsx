import { Link, useParams } from "react-router-dom";
import projects from "../data/Project";


export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl">Project not found</h2>
        <Link to="/projects" className="text-tealishGreen underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 px-6 md:px-16">
      <Link to="/projects" className="text-tealishGreen underline">
        ← Back to Projects
      </Link>

      <div className="mt-8 max-w-4xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl shadow-lg"
        />

        <h1 className="text-3xl md:text-4xl font-bold mt-6 text-[#0b1d3a]">
          {project.title}
        </h1>
        <p className="text-tealishGreen">{project.subtitle}</p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-lg">Technologies:</h3>
          <ul className="flex gap-3 flex-wrap mt-2">
            {project.technologies.map((tech, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-tealishGreen/10 text-tealishGreen rounded-full text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex gap-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md bg-tealishGreen text-white hover:bg-tealishGreen/80 transition"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md border border-tealishGreen text-tealishGreen hover:bg-tealishGreen hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

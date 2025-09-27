import { Link, useParams } from "react-router-dom";
import projects from "../data/Project";
import Heading from "../component/global/Heading";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-darkNavy dark:text-offWhite">Project not found</h2>
        <Link to="/projects" className="text-tealishGreen underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 px-6 md:px-16 bg-offWhite dark:bg-darkNavy transition-colors duration-300">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 font-semibold text-tealishGreen group text-left"
      >
        <span className="transition-transform duration-300 group-hover:scale-110 inline-flex items-center font-semibold text-darkNavy dark:text-tealishGreen group text-left">
          <Icon
            icon="mdi:arrow-left"
            className="text-xl text-darkNavy dark:text-tealishGreen"
          />
          Back to projects
        </span>
      </Link>

      <div className="mt-8 max-w-4xl mx-auto">
        <video
          src={project.video}
          alt={project.title}
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-xl shadow-lg"
        />

        <Heading as="h3" size="2xl" className="text-darkNavy dark:text-offWhite text-left py-2 mt-4">
          <span>{project.title}</span>
        </Heading>

        <p className="mt-2 text-tealishGreen leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6">
          <Heading as="h3" size="base" className="text-darkNavy dark:text-offWhite text-left">
            <span> Technologies: </span>
          </Heading>
          <ul className="flex gap-3 flex-wrap mt-2">
            {project.technologies.map((tech, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-tealishGreen/10 dark:bg-tealishGreen/20 text-tealishGreen rounded-full text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex gap-6">
          <Link
            to={project.link}
            rel="noopener noreferrer"
            target="_blank"
            className="group inline-flex justify-center items-center gap-3 px-6 py-3 rounded-xl border-2 border-tealishGreen shadow-md font-medium transition-colors duration-300 overflow-hidden text-tealishGreen"
            style={{
              backgroundImage:
                "repeating-linear-gradient(150deg, #e6fffa 0 4px, #b1b1f1ff 4px 6px)"

            }}
          >
            <span className="transition-all duration-300 origin-center group-hover:scale-115 ">
              Live Link
            </span>
          </Link>
          <Link
            to={project.github}
            rel="noopener noreferrer"
            target="_blank"
            className="group inline-flex justify-center items-center gap-3 px-6 py-3 rounded-xl border-2 border-tealishGreen shadow-md font-medium transition-colors duration-300 overflow-hidden text-tealishGreen"
            style={{
              backgroundImage:
                "repeating-linear-gradient(150deg, #e6fffa 0 4px, #b1b1f1ff 4px 6px)"

            }}
          >
            <span className="transition-all duration-300 origin-center group-hover:scale-115 ">
              GitHub
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

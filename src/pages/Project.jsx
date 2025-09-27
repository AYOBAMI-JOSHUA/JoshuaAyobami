import Heading from "../component/global/Heading";
import ProjectCard from "../component/project/Projectcard";
import projects from "../data/Project";


export default function Projects() {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-offWhite dark:bg-darkNavy transition-colors duration-300" id="projects">
        <Heading as="h1" size="3xl" className="text-darkNavy dark:text-tealishGreen text-center py-16">
            <span> My Projects </span>
        </Heading>

        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
            {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>
    </section>
  );
}

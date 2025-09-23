import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
        delay: index * 0.2,
      }
    );
  }, [index]);

  return (
    <Link to={`/projects/${project.id}`}>
      <div
        ref={cardRef}
        className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-offWhite dark:bg-darkNavy transition-colors duration-300"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-tealishGreen text-xl font-semibold">{project.title}</h3>
          <p className="text-offWhite dark:text-softWhite text-sm">{project.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

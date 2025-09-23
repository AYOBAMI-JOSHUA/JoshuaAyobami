import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiVercel, SiPhp } from "react-icons/si";
import Text from "../global/Text";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-darkNavy dark:text-offWhite" size={32} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-darkNavy dark:text-offWhite" size={32} /> },
  { name: "React.js", icon: <FaReact className="text-tealishGreen" size={32} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-tealishGreen" size={32} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-darkNavy dark:text-offWhite" size={32} /> },
  { name: "HTML5", icon: <FaHtml5 className="text-tealishGreen" size={32} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-tealishGreen" size={32} /> },
  { name: "PHP", icon: <SiPhp className="text-darkNavy dark:text-offWhite" size={32} /> },
  { name: "Git", icon: <FaGitAlt className="text-tealishGreen" size={32} /> },
  { name: "GitHub", icon: <FaGithub className="text-darkNavy dark:text-offWhite" size={32} /> },
  { name: "Vercel", icon: <SiVercel className="text-tealishGreen" size={32} /> },
];

export default function Tools() {
  return (
    <div className="pt-6">
        <Text
            as="h4"
            size="base"
            className="text-darkNavy dark:text-offWhite mb-6"
        >
            Tools and Languages
        </Text>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
          <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-tealishGreen/30 hover:bg-tealishGreen/10 transition"
          >
              {skill.icon}
              <span className="mt-2 text-sm font-medium text-darkNavy dark:text-offWhite">{skill.name}</span>
          </div>
          ))}
      </div>
    </div>
  );
}

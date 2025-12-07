import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaRoute } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiVercel, SiPhp, SiNextdotjs, SiCloudflare, SiRedux, SiExpo } from "react-icons/si";
import Text from "../global/Text";

const skills = [
  // Core Languages
  { name: "JavaScript", icon: <SiJavascript className="text-darkNavy dark:text-offWhite" size={32} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-darkNavy dark:text-offWhite" size={32} /> },

  // Web Frameworks
  { name: "React.js", icon: <FaReact className="text-tealishGreen" size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-darkNavy dark:text-offWhite" size={32} /> },

  // Mobile Development
  { name: "React Native", icon: <FaReact className="text-tealishGreen" size={32} /> },
  { name: "Expo", icon: <SiExpo className="text-darkNavy dark:text-offWhite" size={32} /> },

  // Backend & Database
  { name: "Node.js", icon: <FaNodeJs className="text-tealishGreen" size={32} /> },
  { name: "Convex", icon: <SiCloudflare className="text-darkNavy dark:text-offWhite" size={32} /> }, // closest icon for Convex

  // State Management & Routing
  { name: "Zustand", icon: <SiRedux className="text-darkNavy dark:text-offWhite" size={32} /> }, // placeholder icon
  { name: "Expo Router", icon: <FaRoute className="text-tealishGreen" size={32} /> },

  // Styling
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-darkNavy dark:text-offWhite" size={32} /> },
  { name: "React Native StyleSheet", icon: <FaCss3Alt className="text-tealishGreen" size={32} /> },

  // Core Web
  { name: "HTML5", icon: <FaHtml5 className="text-tealishGreen" size={32} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-tealishGreen" size={32} /> },

  // Tools
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

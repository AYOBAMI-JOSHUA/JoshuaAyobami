import { FaReact, FaHtml5, FaArrowUp, FaRoute } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVercel, SiExpo, SiCloudflare, SiRedux } from "react-icons/si";
import Text from "../global/Text";
import { Link } from "react-router-dom";

export default function Experience() {

  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-tealishGreen" size={32} /> },
    { name: "React.js", icon: <FaReact className="text-tealishGreen" size={32} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-tealishGreen" size={32} /> },
    { name: "HTML5", icon: <FaHtml5 className="text-tealishGreen" size={32} /> },
    { name: "Vercel", icon: <SiVercel className="text-tealishGreen" size={32} /> },
  ];

  const skillss = [
    { name: "JavaScript", icon: <SiJavascript className="text-tealishGreen" size={32} /> },
    { name: "React.js", icon: <FaReact className="text-tealishGreen" size={32} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-tealishGreen" size={32} /> },
    { name: "HTML5", icon: <FaHtml5 className="text-tealishGreen" size={32} /> },
    { name: "Vercel", icon: <SiVercel className="text-tealishGreen" size={32} /> },
    { name: "React Native", icon: <FaReact className="text-tealishGreen" size={32} /> },
    { name: "Expo", icon: <SiExpo className="text-darkNavy dark:text-offWhite" size={32} /> },
    { name: "Convex", icon: <SiCloudflare className="text-darkNavy dark:text-offWhite" size={32} /> },
    { name: "Zustand", icon: <SiRedux className="text-darkNavy dark:text-offWhite" size={32} /> },
    {name: "Expo Router", icon: <FaRoute className="text-tealishGreen" size={32} /> },
  ];

  return (
    <div className="sm:p-4 py-8">
      <Text
        as="h1"
        size="lg"
        className="text-darkNavy dark:text-tealishGreen"
      >
        EXPERIENCE
      </Text>

      {/* SONA EXPERIENCE */}
      <Link
        to="https://sona-and-son-limited-2ol1.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text
          as="h4"
          size="base"
          className="flex text-darkNavy dark:text-tealishGreen mb-2 pt-6 flex-row items-center group"
        >
          Frontend Developer, Sona & Son Ltd (November 2024)
          <FaArrowUp
            className="ml-2 transform rotate-[50deg] text-darkNavy dark:text-tealishGreen transition-transform duration-300 group-hover:scale-125"
            size={16}
          />
        </Text>
      </Link>

      <Text
        as="p"
        size="base"
        className="text-tealishGreen dark:text-offWhite"
      >
        Sona Property Ltd. is a real estate company that provides property sales, rentals, 
        and management services. I built and maintained responsive user interfaces, developed 
        interactive property listing components, optimized layouts for performance and accessibility,
        and ensured a seamless user experience across devices.
      </Text>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-2">
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

      {/* HNG INTERNSHIP EXPERIENCE */}
      <Link
        to="https://swift-tix.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text
          as="h4"
          size="base"
          className="flex text-darkNavy dark:text-tealishGreen mb-2 pt-10 flex-row items-center group"
        >
          Frontend & Mobile Developer Intern, HNG Internship (Sept – Dec 2026)
          <FaArrowUp
            className="ml-2 transform rotate-[50deg] text-darkNavy dark:text-tealishGreen transition-transform duration-300 group-hover:scale-125"
            size={16}
          />
        </Text>
      </Link>

      <Text
        as="p"
        size="base"
        className="text-tealishGreen dark:text-offWhite"
      >
        During the HNG Internship, I worked across multiple project stages as a 
        frontend and mobile developer. I contributed to building responsive web features, 
        developing mobile app interfaces with React Native and Expo, integrating APIs, 
        and optimizing performance. The internship involved real-world collaboration, 
        GitHub workflows, and solving UI/UX challenges across one web application 
        and two mobile products.
      </Text>

      <div className="mt-4 space-y-2">

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-2">
            {skillss.map((skill, index) => (
            <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-tealishGreen/30 hover:bg-tealishGreen/10 transition"
            >
                {skill.icon}
                <span className="mt-2 text-sm font-medium text-darkNavy dark:text-offWhite">{skill.name}</span>
            </div>
            ))}
        </div>

        <div className="flex items-center">
          <FaArrowUp
            className="mr-2 transform rotate-[50deg] text-darkNavy dark:text-tealishGreen"
            size={14}
          />
          <a
            href="https://drive.google.com/drive/folders/1Txh-Jgglu_GjF9avGKpyE2HgAICSFqkg?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkNavy dark:text-offWhite underline"
          >
            Mobile App Project 1 (APK Download)
          </a>
        </div>

        <div className="flex items-center">
          <FaArrowUp
            className="mr-2 transform rotate-[50deg] text-darkNavy dark:text-tealishGreen"
            size={14}
          />
          <a
            href="https://drive.google.com/drive/folders/1zPJruQv2AI8hqXgTPbJSUBeAmCeR7yLn?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkNavy dark:text-offWhite underline"
          >
            Mobile App Project 2 (APK Download)
          </a>
        </div>
        
      </div>

    </div>
  );
}

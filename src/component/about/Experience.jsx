import { FaReact, FaHtml5,  FaArrowUp } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVercel } from "react-icons/si";
import Text from "../global/Text";
import { Link } from "react-router-dom";

export default function Experience() {

    const skills = [
      { name: "JavaScript", icon: <SiJavascript className="text-[#0b1d3a]" size={32} /> },
      { name: "React.js", icon: <FaReact className="text-[#49bf9d]" size={32} /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#0b1d3a]" size={32} /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#49bf9d]" size={32} /> },
      { name: "Vercel", icon: <SiVercel className="text-[#49bf9d]" size={32} /> },
    ];
    

    return(
        <div className=" sm:p-4 py-8">
            <Text
                as="h1"
                size="lg"
                className="text-darkNavy dark:text-offWhite"
            >
                EXPERIENCE
            </Text>
            <Link
                to="https://sona-and-son-limited-2ol1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Text
                    as="h4"
                    size="base"
                    className="flex text-darkNavy dark:text-offWhite mb-2 pt-6 flex-row items-center group"
                >
                    Frontend developer, Sona & Son Ltd (November 2024)
                    <FaArrowUp
                    className="ml-2 transform rotate-[50deg] text-[#49bf9d] transition-transform duration-300 group-hover:scale-125"
                    size={16}
                    />
                </Text>
            </Link>

            
            <Text
                as="p"
                size="base"
                className="text-tealishGreen"
            >
               Sona Property Ltd. is a real estate company that provides property sales, rentals, and 
               management services. I built and maintained responsive user interfaces, developed 
               interactive property listing components, optimized layouts for performance and accessibility,
               and ensured a seamless user experience across devices.
            </Text>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-2">
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
                    
    )
}
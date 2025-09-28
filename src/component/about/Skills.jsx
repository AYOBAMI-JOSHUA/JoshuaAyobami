import Text from "../global/Text";
import Tools from "./Tools";

export default function Skills() {
    

    return(
       <div className="py-8 sm:p-8 ">
            <Text
                as="h1"
                size="lg"
                className="text-darkNavy dark:tealishGreen"
            >
                SKILLS
            </Text>
    
            <Text
                as="p"
                size="base"
                className="mt-4 text-tealishGreen dark:offWhite"
            >
                My core expertise lies in frontend development, with strong proficiency in HTML, CSS, JavaScript, and React. 
                I am passionate about building clean, responsive, and interactive user interfaces that enhance user engagement.
                 Beyond coding, I am deeply interested in problem-solving, continuous learning, and exploring how mathematical and 
                 logical thinking can improve software development.
            </Text>

            <Tools />

        </div>
    )
}
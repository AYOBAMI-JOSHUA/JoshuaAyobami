import Text from "../global/Text";

export default function Education() {
    

    return(
        <div className="sm:p-8 py-8 text-left">
            <Text
                as="h1"
                size="lg"
                className="text-darkNavy dark:text-tealishGreen text-left"
            >
                EDUCATION
            </Text>
    
           <Text
                as="p"
                size="base"
                className="mt-4 text-tealishGreen dark:text-offWhite"
            >
                My core expertise lies in frontend and mobile development, with strong 
                proficiency in JavaScript, React, Next.js, and React Native (Expo). 
                I enjoy building clean, responsive, and interactive user interfaces that 
                deliver smooth experiences across both web and mobile platforms. 
                I also work with tools like Convex for real-time backend functionality, 
                Zustand for state management, and Expo Router for navigation.
                Beyond coding, I’m passionate about problem-solving, continuous learning, 
                and applying mathematical and logical thinking to create efficient, 
                scalable software solutions.
            </Text>


        </div>
    )
}
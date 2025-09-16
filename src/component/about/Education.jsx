import Text from "../global/Text";

export default function Education() {
    

    return(
        <div className=" p-8 ">
            <Text
                as="h1"
                size="lg"
                className="text-[#0b1d3a]"
            >
                EDUCATION
            </Text>
    
            <Text
                as="p"
                size="base"
                className="mt-4 text-tealishGreen"
            >
                I am a 400-level student at the
                 <span className="font-bold">University of Lagos</span>, pursuing a 
                 <span className="font-bold"> Bachelor’s degree in Mathematics.</span>
                 <br />My academic background has strengthened my problem-solving abilities, logical reasoning, and analytical 
                thinking — skills that directly enhance my approach to software development. This foundation, combined 
                with my passion for technology, supports my growth as a frontend developer and my ability to build efficient, 
                user-focused solutions.
            </Text>
        </div>
    )
}
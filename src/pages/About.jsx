import { Icon } from "@iconify/react/dist/iconify.js";
import Education from "../component/about/Education";
import Experience from "../component/about/Experience";
import Skills from "../component/about/Skills";
import { Link } from "react-router-dom";
import Heading from "../component/global/Heading";


export default function About() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] py-16 px-6 md:px-20 pt-[100px]">
        <div className="max-w-5xl mx-auto text-left">
            <Heading as="h1" size="3xl" className="text-[#0b1d3a] text-center">
               <span> About Me</span>
            </Heading>

            <div className="bg-[#f7f7f7] sm:p-8 transition text-left">
                <section className=" sm:p-4 text-left">
                    <Education />
                </section>

                <section className="sm:p-4 text-left">
                    <Skills />
                </section>

                <section className=" sm:p-4 text-left">
                    <Experience />
                </section>
            </div>
            <div className="mt-6 text-left">
                <Link
                    to="https://drive.google.com/file/d/12bu5jampe17WqIzA4lonsJp-6zE3kyKA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-tealishGreen group text-left"
                >
                    <Icon
                        icon="mdi:file-account-outline"
                        className="text-2xl text-[#0b1d3a]"
                    />
                    <span className="transition-transform duration-300 group-hover:scale-110">
                        View Resume
                    </span>
                </Link>
            </div>
            

        </div>
    </div>
  )
}

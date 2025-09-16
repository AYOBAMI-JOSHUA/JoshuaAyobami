import Education from "../component/about/Education";
import Experience from "../component/about/Experience";
import Skills from "../component/about/Skills";
import Text from "../component/global/Text";


export default function About() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-20 pt-[100px]">
        <div className="max-w-5xl mx-auto">
            <Text
                as="h1"
                size="3xl"
                className="text-[#0b1d3a] text-center"
            >
                About Me
            </Text>

            <div className="bg-white p-8 transition">
                <section className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
                    <Education />
                </section>

                <section className="bg-white shadow-md p-8 hover:shadow-lg transition">
                    <Skills />
                </section>

                <section className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
                    <Experience />
                </section>
            </div>
        </div>
    </div>
  )
}

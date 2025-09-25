import Form from "../component/connect/Form";
import Heading from "../component/global/Heading";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Connect() {
    const socialLinks = [
        { id: 1, url: "https://github.com/AYOBAMI-JOSHUA", icon: "mdi:github" },
        { id: 2, url: "https://x.com/your_fav_tecbro?s=21", icon: "mdi:twitter" },
        { id: 3, url: "https://www.instagram.com/e.a.g.l.e_boy/?hl=en", icon: "mdi:instagram" },
        { id: 4, url: "https://www.linkedin.com/in/joshua-ayobami-203066275/", icon: "mdi:linkedin" },
    ];

    return(
        <main className="flex-grow min-h-[calc(100vh-70px-90px)] pt-[57px] bg-offWhite dark:bg-darkNavy transition-colors duration-300 mb-4">
            <Heading as="h1" size="2xl" className="text-darkNavy dark:text-offWhite text-center pt-8">
                <span> Let's connect</span>
            </Heading>
            <Form />

            {/* socils for mobile */}
            <div className="px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="block md:hidden flex flex-row mt-16 md:mt-0">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-tealishGreen transition-all duration-300 transform hover:scale-125 hover:shadow-lg rounded-full"
                        >
                            <Icon icon={link.icon} className="text-3xl" />
                        </a>
                    ))}
                </div>
            </div>
        </main>
    )
}
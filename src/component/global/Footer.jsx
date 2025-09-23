import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";


export default function Footer() {

    const socialLinks = [
        { id: 1, url: "https://github.com/AYOBAMI-JOSHUA", icon: "mdi:github" },
        { id: 2, url: "https://x.com/your_fav_tecbro?s=21", icon: "mdi:twitter" },
        { id: 3, url: "https://www.instagram.com/e.a.g.l.e_boy/?hl=en", icon: "mdi:instagram" },
        { id: 4, url: "https://www.linkedin.com/in/joshua-ayobami-203066275/", icon: "mdi:linkedin" },
    ];

    return(
        <footer className="bg-offWhite dark:bg-darkNavy border-t border-tealishGreen/20" >
            <div className="px-4 sm:px-8 md:px-12 lg:px-20 h-[90px]">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Social Links */}
                    <div className="hidden md:flex space-x-4 mt-3 md:mt-0">
                        {socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-tealishGreen transition-all duration-300 transform hover:scale-125 hover:shadow-lg rounded-full"
                            >
                              <Icon icon={link.icon} className="text-4xl" />
                            </a>
                        ))}
                    </div>

                    {/* Hire Me */}
                    <div className="flex justify-center mt-6 md:mt-0">
                        <Link
                            to="/connect"
                            className="group flex items-center gap-2 text-tealishGreen font-semibold px-6 py-3 transition-all duration-300"
                        >
                            <Icon icon="mdi:chat-outline" className="text-4xl text-darkNavy dark:text-offWhite" />
                            <span className="transition-transform duration-300 group-hover:scale-110 origin-center text-tealishGreen">
                                Hire Me
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
        </footer>
    );

}
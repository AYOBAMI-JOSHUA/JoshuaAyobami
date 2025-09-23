import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Form() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_pt5chsw', 'template_4pchgls', form.current, {
            publicKey: 'zkj_06S2oNXfxpxNG',
        })
        .then(
            (result) => {
                console.log("Message sent:", result.text);
                alert("✅ Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log("Error:", error.text);
                alert("❌ Failed to send message. Try again later.");
            }
        );
    };
    

    return(
        <div className="h-full flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-16 mt-8">
            <form className="w-full max-w-xl space-y-4" ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="outline-none border border-gray-300 dark:border-gray-600 rounded-lg p-3 w-full bg-white dark:bg-darkNavy text-gray-900 dark:text-softWhite placeholder-gray-500 dark:placeholder-gray-400 focus:border-tealishGreen focus:ring-2 focus:ring-tealishGreen/30 transition-all duration-300"
                />
                <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    className="outline-none border border-gray-300 dark:border-gray-600 rounded-lg p-3 w-full bg-white dark:bg-darkNavy text-gray-900 dark:text-softWhite placeholder-gray-500 dark:placeholder-gray-400 focus:border-tealishGreen focus:ring-2 focus:ring-tealishGreen/30 transition-all duration-300"
                />
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    className="outline-none border border-gray-300 dark:border-gray-600 rounded-lg p-3 w-full bg-white dark:bg-darkNavy text-gray-900 dark:text-softWhite placeholder-gray-500 dark:placeholder-gray-400 focus:border-tealishGreen focus:ring-2 focus:ring-tealishGreen/30 transition-all duration-300"
                ></textarea>
                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className="group inline-flex justify-center items-center gap-3 px-6 py-3 rounded-xl border-2 border-tealishGreen shadow-md font-medium transition-colors duration-300 overflow-hidden text-tealishGreen bg-white dark:bg-darkNavy"
                        style={{
                        backgroundImage:
                            "repeating-linear-gradient(150deg, #e6fffa 0 4px, #b0f5edff 4px 6px)",
                        }}
                    >
                        <span className="transition-all duration-300 origin-center group-hover:scale-115">
                        Send a message
                        </span>
                    </button>
                </div>

            </form>
        </div>
    )
}
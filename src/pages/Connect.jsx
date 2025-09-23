import Form from "../component/connect/Form";
import Heading from "../component/global/Heading";

export default function Connect() {
    

    return(
        <main className="flex-grow min-h-[calc(100vh-70px-90px)] pt-[57px] bg-offWhite dark:bg-darkNavy transition-colors duration-300 mb-4">
            <Heading as="h1" size="2xl" className="text-darkNavy dark:text-offWhite text-center pt-8">
                <span> Let's connect</span>
            </Heading>
            <Form />
        </main>
    )
}
import CursorLook from "../component/home/CursorLook";

export default function Home() {
  return (
    <main className="flex-grow min-h-[calc(100vh-70px-90px)] pt-[70px]">
      {/* Hero Section */}
      <section className="relative w-full h-full flex items-center justify-center">
        <CursorLook />
      </section>
    </main>
  );
}

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export default function Darkmodetoogle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-tealishGreen hover:bg-tealishGreen/10 transition dark:text-offWhite transition-all duration-300 transform hover:scale-125  rounded-full"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <Icon icon="mdi:weather-sunny" className="text-2xl" />
      ) : (
        <Icon icon="mdi:moon-waning-crescent" className="text-2xl" />
      )}
    </button>
  );
}

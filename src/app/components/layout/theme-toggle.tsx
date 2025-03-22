'use client';

import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button className="cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "light" ? ( 
          <BsFillMoonStarsFill className="text-blue-800" size={24} />
      ) : (
          <MdSunny className="text-yellow-400" size={24} />
      )}
    </button>
  );
}
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi";
import { Tooltip } from "flowbite-react";
import useSound from "use-sound";

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [play] = useSound("./sound/bubble-sound.mp3");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handlePlay() {
    play();
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <Tooltip content="Modo Claro">
          <HiSun
            className="h-6 w-6 cursor-pointer text-yellow-400"
            onClick={() => {
              setTheme("light");
              handlePlay();
            }}
          />
        </Tooltip>
      ) : (
        <Tooltip content="Modo Oscuro">
          <HiMoon
            className="h-6 w-6 cursor-pointer text-slate-700"
            onClick={() => {
              setTheme("dark");
              handlePlay();
            }}
          />
        </Tooltip>
      )}
    </div>
  );
};
export default DarkModeBtn;

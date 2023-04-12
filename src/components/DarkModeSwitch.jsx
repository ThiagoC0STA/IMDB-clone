"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {!mounted ? (
        <CgDarkMode className="cursor-pointer text-xl hover:text-amber-500 transition duration-300" />
      ) : currentTheme === "dark" ? (
        <MdLightMode
          className="cursor-pointer text-xl hover:text-amber-500 transition duration-300"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="cursor-pointer text-xl hover:text-amber-500 transition duration-300"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}

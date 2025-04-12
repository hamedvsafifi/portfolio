// src/ThemeToggle.jsx
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    } else if (storedTheme === "light") {
      document.documentElement.removeAttribute("data-theme");
      setIsDarkMode(false);
    } else {
      // No stored theme -- fallback to system preference
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.setAttribute("data-theme", "dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.removeAttribute("data-theme");
        setIsDarkMode(false);
      }
    }
  }, []);

  const handleToggle = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      htmlElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      htmlElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="button cursor-pointer translate-y-0.5 "
    >
      {isDarkMode ? (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="flex items-center justify-center"
        >
          <defs>
            <clipPath id="clipYolk" clipPathUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="18" />
            </clipPath>
          </defs>
          <circle cx="30" cy="30" r="18" fill="#fff806" />
          <circle
            cx="35.58"
            cy="30"
            r="18"
            fill="#080139"
            clipPath="url(#clipYolk)"
          />
        </svg>
      ) : (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="flex items-center justify-center"
        >
          <circle cx="30" cy="30" r="18" fill="#ffd504" />
          <path
            d="M30,16 c12,0 15,10 15,10 l-3,1 c-2-8-10-9-12-9 l0,-4"
            fill="#fff806"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;

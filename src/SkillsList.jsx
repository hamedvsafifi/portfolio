import React from "react";
import { useEffect } from "react";
import { useState } from "react";

{
  /* 
  Classes to ensure inclusion:
  bg-red-200 bg-blue-200 bg-green-200 bg-yellow-200 bg-purple-200 
  dark:bg-red-800 dark:bg-blue-800 dark:bg-green-800 dark:bg-yellow-800 dark:bg-purple-800
*/
}

const skills = {
  fundamental: [
    "c++",
    "python",
    "oop",
    "version control",
    "problem solving",
    "data structure",
  ],
  frontend: ["HTML", "CSS", "JavaScript", "react", "tailwind"],
  os: ["Linux", "Windows"],
};

function SkillsList() {
  const [skillColors, setSkillColors] = useState([]);

  function updateSkillColor(index, color) {
    setSkillColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = color;
      sessionStorage.setItem("skillColors", JSON.stringify(newColors));
      return newColors;
    });
  }

  console.log("skillColors", skillColors);
  return (
    <div>
      <h2 className="text-gray-700 dark:text-gray-300 text-3xl mb-4">
        Skills List
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mx-5 md:mx-0 justify-around">
        <div className="relative">
          <h3 className="h3-skilllist">fundamental</h3>
          <ul className="ul-skilllist ">
            {skills.fundamental.map((skill, index) => (
              <SkillItem
                key={index}
                index={index}
                name={skill}
                updateSkillColor={updateSkillColor}
              />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="h3-skilllist ">frontend</h3>
          <ul className="ul-skilllist ">
            {skills.frontend.map((skill, index) => (
              <SkillItem
                key={index}
                index={index}
                name={skill}
                updateSkillColor={updateSkillColor}
              />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="h3-skilllist ">OS</h3>

          <ul className="ul-skilllist ">
            {skills.os.map((skill, index) => (
              <SkillItem
                key={index}
                index={index}
                name={skill}
                updateSkillColor={updateSkillColor}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SkillItem({ name, index, updateSkillColor }) {
  // State to hold the current background color classes.
  let currSkillColors = JSON.parse(
    sessionStorage.getItem("skillColors") || "[]"
  );
  const [bgColor, setBgColor] = useState(`${currSkillColors[index]}`);

  // Function to randomly choose a paired light/dark background.
  const randomColor = () => {
    const lightColors = [
      "bg-red-200",
      "bg-blue-200",
      "bg-green-200",
      "bg-yellow-200",
      "bg-purple-200",
    ];
    const darkColors = [
      "bg-red-800",
      "bg-blue-800",
      "bg-green-800",
      "bg-yellow-800",
      "bg-purple-800",
    ];

    const index = Math.floor(Math.random() * lightColors.length);
    // This returns a string that applies the light mode class normally
    // and uses Tailwind's `dark:` variant for dark mode.
    return `${lightColors[index]} dark:${darkColors[index]}`;
  };

  // useEffect sets an interval that updates the background color every 10 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      let newColor = randomColor();
      setBgColor(newColor);
      updateSkillColor(index, newColor);
    }, 5000); // 5,000 ms = 5 seconds

    // Cleanup interval on component unmount.
    return () => clearInterval(interval);
  }, [index, updateSkillColor]);

  return (
    <li
      className={`text-black dark:text-white ${bgColor} rounded-2xl px-2 py-1 capitalize`}
    >
      {name}
    </li>
  );
}

export default SkillsList;

import React from "react";
import "./Projectslist_style.css";
const ProjectApiTest = [
  // border-green-400 border-green-200 border-blue-400 border-blue-200
  {
    id: 1,
    name: "Test Website",
    design: "https://placehold.co/200",
    brief: "A demo website project",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    name: "Portfolio Site",
    design: "https://placehold.co/200",
    brief: "A personal portfolio project",
    link: "https://afifi-portfolio.netlify.app/",
  },
  {
    id: 3,
    name: "E-commerce App",
    design: "https://placehold.co/200",
    brief: "An online shopping platform",
    link: "https://example.com/project3",
  },
  {
    id: 4,
    name: "Blog Platform",
    design: "https://placehold.co/200",
    brief: "A blogging platform for writers",
    link: "https://example.com/project4",
  },
  {
    id: 5,
    name: "Social Media App",
    design: "https://placehold.co/200",
    brief: "A social networking application",
    link: "https://example.com/project5",
  },
  {
    id: 6,
    name: "Task Manager",
    design: "https://placehold.co/200",
    brief: "A task management tool",
    link: "https://example.com/project6",
  },
  {
    id: 7,
    name: "Weather App",
    design: "https://placehold.co/200",
    brief: "A weather forecasting application",
    link: "https://example.com/project7",
  },
  {
    id: 8,
    name: "Chat Application",
    design: "https://placehold.co/200",
    brief: "A real-time chat application",
    link: "https://example.com/project8",
  },
];

function Projects() {
  return (
    <>
      <h2 className="text-3xl mt-5 mb-5 text-yellow-500 text-center">
        Projects
      </h2>
      <ProjectList />
    </>
  );
}

function ProjectList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 mt-5 justify-items-center  auto-rows-fr items-stretch">
      {ProjectApiTest.map((project, num) => (
        <ProjectItem key={project.id} project={project} num={num} />
      ))}
    </div>
  );
}

function ProjectItem({ project, num }) {
  return (
    <div
      className={`projectlistitem capitalize  ${
        num % 2 === 0
          ? "border-green-400 dark:border-green-200"
          : "border-blue-400 dark:border-blue-200"
      } `}
    >
      <h3 className="text-2xl font-afifi w-full h-auto ">{project.name} </h3>
      <img
        className="w-full h-auto px-0"
        src={project.design}
        alt={project.name}
      />
      <p className="text-center w-full h-auto"> {project.brief} </p>
      <p className="text-center w-full h-auto ">
        live demo?
        <a c href={project.link} target="_blank" rel="noopener noreferrer">
          &nbsp;&nbsp;🚀
        </a>
      </p>
    </div>
  );
}

export default Projects;

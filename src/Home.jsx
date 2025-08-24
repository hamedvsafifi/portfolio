import "./App.css";
import ScreenWidth from "./ScreenWidth";
import About from "./About";
import Skills from "./SkillsList";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Intro />
      <About>
        Hi, I'm a passionate front-end developer with a love for creating
        interactive and user-friendly web applications. I enjoy solving
        challenging problems and continuously learning new technologies to
        improve my skills. Let's build something amazing together!
      </About>
      <Skills />
    </div>
  );
};

function Intro() {
  const screenWidth = ScreenWidth().width;
  const isMobile = screenWidth < 640; // Adjust the breakpoint as needed
  return (
    <>
      <div className="flex flex-col gap-5 text-black dark:text-white ">
        {isMobile ? (
          <h1 className="text-5xl font-bold capitalize text-center pt-5 ">
            <span className=" dark:text-[#BFF0BF] text-blue-500">
              hi, i'm afifi
            </span>
            <br /> front-end <br /> developer
          </h1>
        ) : (
          <h1 className="text-5xl font-bold capitalize text-center p-5">
            <span className=" dark:text-[#BFF0BF] text-blue-500">
              hi, i'm afifi,
            </span>
            front-end developer
          </h1>
        )}
        <p
          className={`dark:text-gray-400 text-gray-600  capitalize ${
            isMobile ? "px-2 text-center" : "text-center"
          }`}
        >
          ui lover | css margician
        </p>
        <div
          className={`flex ${
            isMobile
              ? "flex-row justify-center"
              : "justify-center text-center items-center"
          } ${screenWidth < 350 ? "flex-row justify-center" : ""} gap-2`}
        >
          <Link to="/projects">
            <button className="cursor-pointer btn-primary">
              view projects
            </button>
          </Link>
          <a
            className="cursor-pointer btn-secondary"
            href="https://www.dropbox.com/scl/fi/70jmo1hr367pwk2pugkih/Afifi_resume.pdf?rlkey=5p7c57fjo8k4ls6nzk2pb7eof&st=6ge910ji&dl=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            download cv
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;

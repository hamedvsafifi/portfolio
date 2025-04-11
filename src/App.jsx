import { useState } from "react";
import "./App.css";
import Header from "./HeaderNav";
import Skills from "./SkillsList";
import About from "./About";
import Contact from "./Contact";
import Projects from "./ProjectsList";
import Footer from "./Footer";

function App() {
  const [activePage, setActivePag] = useState("home");

  function handelPageChange(page) {
    setActivePag(page);
  }
  let content;

  if (activePage === "home") {
    content = (
      <>
        <About>
          Hi, I'm a passionate front-end developer with a love for creating
          interactive and user-friendly web applications. I enjoy solving
          challenging problems and continuously learning new technologies to
          improve my skills. Let's build something amazing together!
        </About>
        <Skills />
      </>
    );
  } else if (activePage === "projects") {
    content = <Projects />;
  } else if (activePage === "contact") {
    content = <Contact />;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" flex-grow px-5 py-2 md:py-5 md:px-15 dark:text-[#BFC8D0]">
        <Header activePage={activePage} handelPageChange={handelPageChange} />
        {content}
      </div>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./HeaderNav";
import Skills from "./SkillsList";
import About from "./About";
import Projects from "./ProjectsList";
function App() {
  return (
    <div className="px-5 py-2 md:py-5 md:px-15 dark:text-[#BFC8D0]">
      <Header />
      <About>
        Hi, I'm a passionate front-end developer with a love for creating
        interactive and user-friendly web applications. I enjoy solving
        challenging problems and continuously learning new technologies to
        improve my skills. Let's build something amazing together!
      </About>
      <Skills />
    </div>
  );
}

export default App;

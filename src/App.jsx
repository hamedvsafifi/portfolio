import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Header from "./HeaderNav";
import About from "./About";
import Contact from "./Contact";
import Projects from "./ProjectsList";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  const [activePage, setActivePag] = useState("home");

  function handelPageChange(page) {
    setActivePag(page);
  }
  // let content;

  // if (activePage === "home") {
  //   content = <Home />;
  // } else if (activePage === "projects") {
  //   content = <Projects />;
  // } else if (activePage === "contact") {
  //   content = <Contact />;
  // }
  return (
    <>
      <div className="min-h-screen flex flex-col gap-10 dark:text-[#BFC8D0]">
        <div className="flex-grow px-10">
          <Header activePage={activePage} handelPageChange={handelPageChange} />
          <Routes>
            <Route
              path="/"
              element={<Home handelPageChange={handelPageChange} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

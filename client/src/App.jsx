import { BrowserRouter, Routes, Route } from "react-router";
import { gsap } from "gsap";

// Style
import "./app.css";

// Dynamic Page that will take a data object id as its prop and fetch the required data from the backend.
import ProjectPage from "./pages/ProjectPage";

// Pages or Routes (whatever you wanna call them)
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import Blog from "./pages/Blog";
import Terminal from "./pages/Terminal";

function App() {
  document.getElementById("root").addEventListener("mousemove", (dets) => {
    // gsap.to("#custom-cursor", {
    //   x: dets.x - 6,
    //   y: dets.y - 6,
    //   duration: 0.5,
    // });
  });

  return (
    <>
      <div
        id="custom-cursor"
        className="w-3 h-3 rounded-full
        fixed top-0 left-0 z-1
        bg-text-base
        "
      ></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/blog" element={<Blog />} />

          {/* This path needs a new name */}
          <Route
            path="/project/windows-web"
            element={<ProjectPage projectName="windows-web" />}
          />

          {/* Any other path gets a page does not exist error */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";

// Style
import "./app.css";

// Dynamic Page that will take a data object id as its prop and fetch the required data from the backend.
import ProjectPage from "./pages/ProjectPage";

// Pages or Routes (whatever you wanna call them)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import Blog from "./pages/Blog";
import Terminal from "./pages/Terminal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

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

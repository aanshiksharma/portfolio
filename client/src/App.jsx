import { BrowserRouter, Routes, Route } from "react-router";

// Pages or Routes (whatever you wanna call them)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";

// Dynamic Page that will take a data object id as its prop and fetch the required data from the backend.
import ProjectPage from "./pages/ProjectPage";

// Styles
import "./scss/app.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* This path needs a new name */}
          <Route path="/projectpage" element={<ProjectPage />} />

          {/* Any other path gets a page does not exist error */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

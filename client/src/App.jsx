import { BrowserRouter, Routes, Route } from "react-router";

// Style
import "./app.css";

// Pages or Routes (whatever you wanna call them)
import Home from "./pages/Home/Home";
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
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/blog" element={<Blog />} />

          {/* Any other path gets a page does not exist error */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

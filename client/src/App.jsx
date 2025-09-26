import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style
import "./app.css";

// Pages or Routes (whatever you wanna call them)
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Terminal from "./pages/Terminal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/blog" element={<Blog />} />

          {/* Any other path gets a page does not exist error */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

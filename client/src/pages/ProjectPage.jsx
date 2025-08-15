import Navbar from "../components/Navbar/Navbar";

function ProjectPage({ projectName }) {
  return (
    <>
      <Navbar />
      <h1>Page dedicated for the project : {projectName}</h1>;
    </>
  );
}

export default ProjectPage;

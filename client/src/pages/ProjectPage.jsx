import Navbar from "../components/Navbar/Navbar";

function ProjectPage({ projectName }) {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <h1>Page dedicated for the project : {projectName}</h1>;
        </section>
      </main>
    </>
  );
}

export default ProjectPage;

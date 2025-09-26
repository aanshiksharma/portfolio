import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />

      <main>
        <section className="space-y-4">
          <h1 className="text-4xl">Error 404</h1>
          <p className="">
            This page you are looking for does not exist. Try using another url?
          </p>
        </section>
      </main>
    </>
  );
}

export default NotFound;

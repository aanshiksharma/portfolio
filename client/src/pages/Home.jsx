import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <div
        id="hero-section"
        className="bg-gradient-custom flex flex-col min-h-screen"
      >
        <Navbar />
        <main className="container mx-auto text-base flex-1 flex items-center justify-center">
          <p>Home Page - Hero Section</p>
        </main>
      </div>
    </>
  );
}

export default Home;

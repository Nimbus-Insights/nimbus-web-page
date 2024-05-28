import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TempProject from "./components/TempProject";

import tempData from "./data/tempData";
import About from "./components/About";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingSection />
        <About />
        <section className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="projects">
            <h2 className="text-ni-yellow text-4xl md:text-5xl font-bold mb-6 text-center">
              Projects
            </h2>
            {tempData.map((project, index) => (
              <TempProject
                key={index}
                name={project.name}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

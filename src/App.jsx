import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TempProject from "./components/TempProject";

import bgMain from "./assets/bg-main.png";

import tempData from "./data/tempData";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="min-h-screen bg-cover bg-center flex flex-col justify-center items-start p-10"
          style={{ backgroundImage: `url(${bgMain})` }}
          id="home"
        >
          <h1 className="text-ni-yellow text-4xl md:text-9xl font-nunito text-left mt-8 mb-4 md:px-36 sm:px-10 px-10">
            Nimbus Insights
          </h1>
          <p className="text-white text-lg md:text-3xl font-nunito text-left mt-4 md:px-36 sm:px-10 px-10">
            Website under construction. Meanwhile,{" "}
            <a href="#temp" className="underline">
              click here
            </a>{" "}
            to check our demo apps.
          </p>
        </section>
        <section className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="projects">
            <h2 className="text-ni-yellow text-3xl md:text-4xl font-bold font-roboto text-center mb-8">
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

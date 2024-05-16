import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import bgMain from "./assets/bg-main.png";
import tempData from "./data/tempData";
import TempProject from "./components/TempProject";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll((prev) => isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isScrolled={scroll} />
      <main>
        <section
          className="h-screen top-8 bg-cover bg-center flex flex-col justify-center items-start"
          style={{ backgroundImage: `url(${bgMain})` }}
        >
          <h1 className="text-ni-yellow text-4xl md:text-9xl font-roboto text-left mt-8 mb-4 md:px-36 sm:px-10 px-10">
            Nimbus Insights
          </h1>
          <p className="text-white text-lg md:text-3xl font-roboto text-left mt-4 md:px-36 sm:px-10 px-10">
            Website under construction.
          </p>
        </section>
        <section className="h-screen top-8 bg-cover bg-center flex flex-col justify-center items-start">
          {tempData.map((project) => {
            return (
              <TempProject
                name={project.name}
                description={project.description}
                url={project.url}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;

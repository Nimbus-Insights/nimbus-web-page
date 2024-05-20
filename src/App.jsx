import Navbar from "./components/Navbar";
import bgMain from "./assets/bg-main.png";
import tempData from "./data/tempData";
import TempProject from "./components/TempProject";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="h-screen top-8 bg-cover bg-center flex flex-col justify-center items-start"
          style={{ backgroundImage: `url(${bgMain})` }}
        >
          <h1 className="text-ni-yellow text-4xl md:text-9xl font-roboto text-left mt-8 mb-4 md:px-36 sm:px-10 px-10">
            Nimbus Insights
          </h1>
          <p className="text-white text-lg md:text-3xl font-roboto text-left mt-4 md:px-36 sm:px-10 px-10">
            Website under construction. Meanwhile,{" "}
            <a href="#temp" className="underline">
              click here
            </a>{" "}
            to check our demo apps .
          </p>
        </section>
        <section
          className="h-screen top-8 bg-cover bg-center flex flex-col justify-center items-start mt-24 pt-4"
          id="temp"
        >
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

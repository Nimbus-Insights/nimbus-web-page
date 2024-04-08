import Navbar from "./components/Navbar";
import bgMain from "./assets/bg-main4.svg"; // Importe a imagem SVG

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="h-screen top-8 bg-cover bg-center flex flex-col justify-center items-start"
          style={{ backgroundImage: `url(${bgMain})` }}
        >
          <h1 className="text-ni-yellow text-4xl md:text-6xl font-roboto text-left mt-8 mb-4 md:px-36 sm:px-10 px-10">
            Nimbus Insights
          </h1>
          <p className="text-white text-lg md:text-xl font-roboto text-left mt-4 md:px-36 sm:px-10 px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aut
            ea, corrupti, error natus officiis quo tenetur repellendus.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;

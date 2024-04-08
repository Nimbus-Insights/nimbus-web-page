import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="h-screen top-16 bg-cover bg-center flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/sua-imagem-de-fundo.jpg')" }}
        >
          <h1 className="text-ni-yellow text-4xl md:text-6xl font-bold text-center mb-4">
            Nimbus Insights
          </h1>
          <p className="text-white text-lg md:text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aut
            ea, corrupti, error natus officiis quo tenetur repellendus.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;

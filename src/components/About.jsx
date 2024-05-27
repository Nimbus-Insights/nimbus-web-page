import Logo from "../assets/logo.png"; // Certifique-se de que este caminho está correto

const About = () => {
  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-ni-blue-dark py-12"
      id="about"
    >
      {/* Imagem Grande à Esquerda */}
      <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0 px-6">
        <img
          src={Logo}
          alt="About Nimbus Insights"
          className="w-2/3 lg:w-1/2 h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Descrição à Direita */}
      <div className="lg:w-1/2 w-full p-8 lg:p-16 text-white flex flex-col items-center lg:items-start">
        <h2 className="text-ni-yellow text-4xl md:text-5xl font-bold mb-6">
          About Us
        </h2>
        <p className="text-base md:text-lg font-roboto mb-4 leading-relaxed text-justify">
          Nimbus Insights is a geosciences company focused on geotechnologies
          and geospatial solutions primarily based on orbital data, computer
          vision, cloud computing, artificial intelligence, and data science.
        </p>
        <p className="text-base md:text-lg font-roboto mb-4 leading-relaxed text-justify">
          With a multidisciplinary team of experts, Nimbus Insights operates in
          various sectors such as mineral, environmental, oil and gas,
          agriculture, and livestock, among others.
        </p>
        <p className="text-base md:text-lg font-roboto leading-relaxed text-justify">
          The mission of Nimbus Insights is to merge cutting-edge technology
          with geosciences, seeking practical and efficient solutions, promoting
          innovation, while maintaining environmental responsibility.
        </p>
      </div>
    </section>
  );
};

export default About;

import bgMain from "../assets/bg-main.png";

const LandingSection = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-start py-12 px-6 md:px-20 lg:px-36"
      style={{ backgroundImage: `url(${bgMain})` }}
      id="home"
    >
      <h1 className="text-ni-yellow text-4xl md:text-8xl lg:text-9xl font-nunito text-left mb-6 leading-tight">
        Nimbus Insights
      </h1>
      <p className="text-white text-lg md:text-2xl lg:text-3xl font-nunito text-left mt-4 leading-relaxed max-w-2xl">
        Remote Sensing and Geospatial Analisys
      </p>
    </section>
  );
};

export default LandingSection;

const TempProject = ({ name, description, url }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
        <div className="px-6 py-4">
          <h5 className="text-ni-yellow text-3xl md:text-4xl font-nunito text-left mt-4 mb-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ni-blue-light transition-colors duration-300"
            >
              {name}
            </a>
          </h5>
          <p className="text-white text-sm md:text-base font-roboto text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TempProject;

const TempProject = ({ name, description, url }) => {
  return (
    <ul className="w-full px-10 md:px-36">
      <li className="mb-10">
        <h5 className="text-ni-yellow text-3xl md:text-4xl font-roboto text-left mt-8 mb-4 underline">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h5>
        <p className="text-white text-sm md:text-base font-roboto text-left mt-4">
          {description}
        </p>
      </li>
    </ul>
  );
};

export default TempProject;

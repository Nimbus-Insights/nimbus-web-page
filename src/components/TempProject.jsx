const TempProject = ({ name, description, url }) => {
  return (
    <ul>
      <li>
        <h5 className="text-ni-yellow text-4xl md:text-3xl font-roboto text-left mt-8 mb-4 md:px-36 sm:px-10 px-10">
          <a href={url} target="_blank">
            {name}
          </a>
        </h5>
        <p className="text-white text-sm md:text-sm font-roboto text-left mt-4 md:px-36 sm:px-10 px-10">
          {description}
        </p>
      </li>
    </ul>
  );
};

export default TempProject;

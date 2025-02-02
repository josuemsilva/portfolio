import "bootstrap-icons/font/bootstrap-icons.css";

import projects from "./Projects";

const buttonStyle =
  "group border-solid border-2 border-blue-600 group rounded-full p-3 hover:bg-blue-600 transition-colors duration-400";

interface GridProps {
  languageChange: boolean;
}

const Grid: React.FC<GridProps> = ({ languageChange }) => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-4xl font-bold">
        {languageChange ? "Projetos" : "Projects"}
      </h1>
      <h3 className="mt-6 text-1xl">
        {languageChange
          ? "Sempre compartilho os meus projetos na"
          : "I always share my projects on my"}{" "}
        <a
          className="text-buttons text-decoration-line: underline"
          href="https://github.com/josuemsilva"
          target="_blank"
        >
          {languageChange ? "Página do GitHub." : "GitHub Page."}
        </a>
      </h3>
      <div className="grid grid-cols-2 auto-rows-auto gap-4 my-10 ml-5 mr-5">
        {projects.map((project) => (
          <div
            className="bg-neutral-100 border-2 rounded-xl p-2 gap-8"
            key={project.title[0]}
          >
            <div className="flex items-center">
              <div className="w-2/3">
                <div className="w-full h-auto">
                  <img
                    className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform duration-400"
                    src={project.image}
                    alt={project.title[0]}
                  />
                </div>
              </div>
              <div className="w-2/3 text-center ml-4">
                <h1 className="font-bold mt-4 text-xl">
                  {Array.isArray(project.title)
                    ? project.title[languageChange ? 0 : 1]
                    : project.title}
                </h1>
                <h3 className="text-ml mt-10">
                  {project.description[languageChange ? 0 : 1]}
                </h3>
                <h2 className="text-ml font-bold mt-5">
                  {project.technologies}
                </h2>
                <div className="mt-9 mb-5 text-xl gap-6 justify-center flex">
                    <a
                      className="m-2 group-hover:text-neutral-100"
                      href={project.ghLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                  <button className={buttonStyle}>
                      <i className="bi bi-github mr-2 text-blue-600 group-hover:text-neutral-100" />
                      GitHub
                  </button>
                    </a>
                    <a
                      className="m-2  group-hover:text-neutral-100"
                      href={project.deployLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                  <button className={buttonStyle}>
                      <i className="bi bi-eye-fill text-blue-600 mr-2 group-hover:text-neutral-100" />
                      {languageChange ? "Visualização" : "View"}
                  </button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

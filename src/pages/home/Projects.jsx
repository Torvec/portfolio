/* eslint-disable react/prop-types */
import projectsData from "../../data/projectsData";

function Projects({ order = "reverse", limit = null, featured = false }) {
  let projectsToDisplay =
    order === "reverse" ? [...projectsData].reverse() : [...projectsData];

  if (limit !== null) {
    projectsToDisplay = projectsToDisplay.slice(0, limit);
  }

  if (featured) {
    projectsToDisplay = projectsToDisplay.filter(
      (project) => project.featured === true,
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      {projectsToDisplay.map((project, index) => (
        <div
          className="flex max-w-full flex-col rounded-lg border bg-stone-100 shadow-lg transition-all duration-500 ease-in-out hover:bg-stone-200 hover:shadow-2xl"
          key={index}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-96 w-full object-cover transition-all duration-500 ease-in-out"
          />
          {/* Project Title, Description, and Tech Stack section */}
          <div className="flex-grow p-4">
            <h4 className="text-xl font-semibold">{project.title}</h4>
            <h5 className="mb-4 text-sm text-neutral-500">
              Completed: {project.dateCompleted}
            </h5>
            <p className="mb-4">{project.description}</p>
            {project.techStack.map((tech, techIndex) => (
              <span
                className="mb-2 mr-2 inline-block rounded-full bg-stone-400 px-3 py-1.5 text-sm text-stone-50"
                key={techIndex}
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Project Button Links */}
          <div className="mt-auto flex justify-around py-4">
            <button className="text-md rounded-2xl border-2 border-stone-500 px-2 py-1 text-stone-900 transition-all duration-300 ease-in-out hover:rounded-full hover:border-orange-500  hover:px-4 hover:text-orange-500">
              <a href={project.repository}>GitHub Repo</a>
            </button>
            <button className="text-md rounded-2xl border-2 border-stone-500 px-2 py-1 text-stone-900 transition-all duration-300 ease-in-out hover:rounded-full hover:border-orange-500  hover:px-4 hover:text-orange-500">
              <a href={project.deployment}>Deployment</a>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;

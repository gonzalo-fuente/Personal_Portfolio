import { projectsData } from "../data/projects";
import Project from "./Project";

function Projects() {
  return (
    <section className="my-projects" id="projects">
      <h2 className="section__title section__title--projects">My projects</h2>
      <p className="section__subtitle section__subtitle--projects">
        A selection of my projects
      </p>

      <div className="portfolio">
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

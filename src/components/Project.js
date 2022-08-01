import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className="portfolio__item">
      <Link to={`/portfolio/${project.id}`}>
        <img
          src={project.img.src}
          alt={project.img.alt}
          className="portfolio__img"
        />
      </Link>
    </div>
  );
}

export default Project;

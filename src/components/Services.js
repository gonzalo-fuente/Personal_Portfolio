import { skillsData } from "../data/skills";
import Service from "./Service";

function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">My Skills</h2>
      <div className="skills">
        {skillsData.map((skill) => (
          <Service key={skill.id} skill={skill} />
        ))}
      </div>

      <a href="#projects" className="btn">
        My Projects
      </a>
    </section>
  );
}

export default Services;

function Service({ skill }) {
  return (
    <div className="skill__item">
      <img src={skill.img} alt={`${skill.text} logo`} className="skill__img" />
      <h3>{skill.text}</h3>
    </div>
  );
}

export default Service;

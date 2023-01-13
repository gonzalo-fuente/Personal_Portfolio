import profile from "../assets/Profile-02.png";

function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Jr. FullStack Developer <br />
        specialized in React and Python
      </p>

      <div className="about-me__body">
        <p>
          Motivated developer looking for a role as fullstack developer in the
          IT industry. A technology enthusiast, In ❤️ with React & Python,
          passionate about building first-class applications.
        </p>
        <p>
          <em>
            I’ve always thrived off working to solve both technical and
            strategic challenges. Working as an “empowered” developer, I take
            pride in being the face of my developments, which I perform with the
            goal of reaching the heart of people...
          </em>
        </p>
      </div>

      <img
        src={profile}
        alt="a portrait of Gonzalo Fuente"
        className="about-me__img"
      />
    </section>
  );
}

export default About;

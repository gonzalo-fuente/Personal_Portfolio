import profile from "../assets/Profile-01.png";

function Introduction({
  title = (
    <>
      Hi, I'm<strong>Gonzalo Fuente</strong>
    </>
  ),
  subtitle = "FullStack Developer",
  img = {
    src: profile,
    alt: "a portrait of Gonzalo Fuente",
  },
}) {
  return (
    <section className="intro">
      <h1 className="section__title section__title--intro">{title}</h1>
      <p className="section__subtitle section__subtitle--intro">{subtitle}</p>
      <img src={img.src} alt={img.alt} className="intro__img" />
    </section>
  );
}

export default Introduction;

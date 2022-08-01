import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { projectsData } from "../data/projects";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import PortfolioItem from "../components/PortfolioItem";

function PortfolioProject() {
  const [currentProject, setCurrentProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentProject(
      projectsData.filter((project) => project.id === Number(id))[0]
    );
  }, []);
  const { title, subtitle, img, content, link } = currentProject;

  return (
    <>
      <Header />
      <Link className="btn btn__back" to="/">
        Go Back
      </Link>
      <Introduction title={title} subtitle={subtitle} img={img} />
      <PortfolioItem content={content} link={link} />
      <Footer />
    </>
  );
}

export default PortfolioProject;

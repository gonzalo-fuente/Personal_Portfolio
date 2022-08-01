import { Link } from "react-router-dom";
import notFoundImg from "../assets/NotFound.png";

const NotFound = () => {
  return (
    <section className="not-found">
      <img className="not-found__img" src={notFoundImg} alt="Page not Found" />
      <Link className="btn btn__portfolio" to="/">
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;

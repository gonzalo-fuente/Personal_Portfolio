import {
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:gonzalo_a_fuente@hotmail.com" className="footer__link">
        <FaRegEnvelope />
        <span> Send me an Email</span>
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/gonzalo-fuente/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/gonzalo-fuente"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.freecodecamp.org/certification/gonzalo_a_fuente/front-end-development-libraries"
            target="_blank"
            rel="noreferrer"
          >
            <FaFreeCodeCamp />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

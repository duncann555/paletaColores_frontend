import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-custom mt-auto">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Paleta de Colores — Todos los derechos
        reservados
      </p>

      <div className="d-flex justify-content-center gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <FaLinkedin size={24} />
        </a>

        <a href="mailto:tucorreo@ejemplo.com" className="footer-icon-link">
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

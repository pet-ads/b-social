import "./footer.css";
import { links } from "../../Interfaces/links";
export default function Footer({ Instagram, mail }: links) {
  return (
    <div className="footer">
      <div className="general-conteiner">
        <div className="copy">
          <p className="copy-text">© Beaba org. 2023 </p>
        </div>

        <div>
          <p className="pet-signature">
            Desenvolvido com ♥ por
            <a href="http://petads.paginas.scl.ifsp.edu.br/"> PET/ADS</a> @
            <a href="https://scl.ifsp.edu.br" rel="noreferrer" target="_blank">
              IFSP São Carlos.
            </a>
          </p>
        </div>

        <div className="social-media-conteiner">
          <div className="insta-conteiner">
            <p className="social-text">
              {" "}
              <a target="_blank" href={Instagram}>
                Instagram
              </a>
            </p>
          </div>
          <div className="mail-conteiner">
            <p className="social-text">
              {" "}
              <a href={`mailto:${mail}`}>Email</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

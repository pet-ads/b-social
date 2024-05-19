import "./footer.css";

export default function Footer() {
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
            <p className="social-text"> Instagram</p>
          </div>
          <div className="mail-conteiner">
            <p className="social-text"> Email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

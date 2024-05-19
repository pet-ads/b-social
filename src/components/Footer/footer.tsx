import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="general-conteiner">
        <div className="copy">
          <p className="copyText">© Beaba org. 2023 </p>
        </div>

        <div className="socialMediaConteiner">
          <div className="instaConteiner">
            <p className="socialText"> Instagram</p>
          </div>
          <div className="mailConteiner">
            <p className="socialText"> Email</p>
          </div>
        </div>
      </div>
      <div>
        <p className="PETSignature">
          Desenvolvido com ♥ por
          <a href="http://petads.paginas.scl.ifsp.edu.br/"> PET/ADS</a> @
          <a href="https://scl.ifsp.edu.br" rel="noreferrer" target="_blank">
            IFSP São Carlos.
          </a>
        </p>
      </div>
    </div>
  );
}

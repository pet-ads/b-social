import "./help.css";
export default function HelpArea() {
  return (
    <div className="wantToHelp">
      <div className="conteiner">
        <div className="HelpText">
          <h2 className="helpH2">Quero Ajudar!</h2>
        </div>
        <div className="btnHelpConteiner">
          <button className="btn">
            <div className="btnTextConteiner">
              <p className="btnText">Comece aqui</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

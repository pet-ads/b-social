import "./help.css";
interface links {
  Logo?: string;
  Guia?: string;
  aboutUs?: string;
  Contact?: string;
  Help?: string;
  Btn?: string;
  Instagram?: string;
  mail?: string;
}
export default function HelpArea({ Btn }: links) {
  return (
    <div className="want-to-help">
      <div className="conteiner">
        <div className="help-text">
          <h2 className="help-h2">Quero Ajudar!</h2>
        </div>
        <div className="btn-help-conteiner">
          <a href={Btn} target="_blank">
            <button className="btn">
              <div className="btn-text-conteiner">
                <p className="btn-text">Comece aqui</p>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

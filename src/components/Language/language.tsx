import "./langSetting.css";
import Brlogo from "/Images/Brlogo.png";
import EUALogo from "/Images/EUALogo.png";

interface ILangSettings {
  selectedPath: string;
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
}

export default function LangSettings({ setSelectedPath, selectedPath }: ILangSettings) {
  return (
    <div className="conteiner">
      <div className="logoBtnConteiner">
        <div className={`logo ${selectedPath === "pt-br" ? "selected" : ""}`} onClick={() => setSelectedPath("pt-br")}>
          <img className="logopic" src={Brlogo} alt="logo bandeira do Brasil" />
        </div>
        <div className={`logo ${selectedPath === "en" ? "selected" : ""}`} onClick={() => setSelectedPath("en")}>
          <img className="logopic" src={EUALogo} alt="logo bandeira do Brasil" />
        </div>
      </div>
    </div>
  );
}

import "./langSetting.css";
import Brlogo from "/Images/Brlogo.png";
import EUALogo from "/Images/EUALogo.png";

interface ILangSettings {
  selectedPath: string;
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
}

export default function LangSettings({ setSelectedPath, selectedPath }: ILangSettings) {
  return (
    <div className="conteiner-lang">
      <div className="logoBtnContainer">
        {selectedPath === "en" ? (
          <div className="logo selected" onClick={() => setSelectedPath("pt-br")}>
            <img className="logopic-eua" src={EUALogo} alt="logo bandeira dos EUA" />
          </div>
        ) : (
          <div className="logo" onClick={() => setSelectedPath("en")}>
            <img className="logopic-br" src={Brlogo} alt="logo bandeira do Brasil" />
          </div>
        )}
      </div>
    </div>
  );
}

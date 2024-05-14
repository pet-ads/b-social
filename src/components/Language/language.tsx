import { useState } from "react";
import "./langSetting.css";
import Brlogo from "/Images/Brlogo.png";

interface ILangSettings {
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
}

export default function LangSettings({ setSelectedPath }: ILangSettings) {
  const [selectedLang, setSelectedLang] = useState<string>("pt-br");

  const handleClick = (lang: string) => {
    setSelectedLang(lang);
    setSelectedPath(lang);
  };

  return (
    <div className="conteiner">
      <div className="logoBtnConteiner">
        <div className={`logo ${selectedLang === "pt-br" ? "selected" : ""}`} onClick={() => handleClick("pt-br")}>
          <img className="logopic" src={Brlogo} alt="logo bandeira do Brasil" />
        </div>
        <div className={`logo ${selectedLang === "en" ? "selected" : ""}`} onClick={() => handleClick("en")}>
          IconUSA
        </div>
      </div>
    </div>
  );
}

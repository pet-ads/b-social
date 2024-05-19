import { useState } from "react";
import "./dropdown.css";
import languagesJson from "../../../public/data/languages.json";

interface Language {
  pathToLogo: string;
  pathToData: string;
}
interface DropDown {
  selectedPath: React.Dispatch<React.SetStateAction<string>>;
}

const languages: Language[] = languagesJson.languages;

export default function Dropdown({ selectedPath }: DropDown) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(languages[0] || null);

  const handleLanguageClick = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    selectedPath(lang.pathToData);
  };

  return (
    <div className="dropdown-conteiner">
      <div>
        <div
          className="dropdown"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img className="marked" src={selectedLanguage ? selectedLanguage.pathToLogo : ""} alt="Selected flag" />

          <div className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
            <div className="flag-container">
              {languages.map((lang, index) => (
                <img
                  className="flag"
                  key={index}
                  src={lang.pathToLogo}
                  alt={`Logo ${index}`}
                  onClick={() => handleLanguageClick(lang)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

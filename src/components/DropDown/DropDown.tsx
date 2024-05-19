import { useState } from "react";
import "./dropdown.css";
import languagesJson from "../../../public/data/languages.json";

interface Language {
  pathToLogo: string;
  pathToData: string;
}

const languages: Language[] = languagesJson.languages;

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const handleLanguageClick = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsOpen(false); // Fechar o dropdown ao selecionar uma bandeira
  };

  return (
    <nav>
      <ul>
        <li
          className="dropdown"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {selectedLanguage ? (
            <img className={"flag"} src={selectedLanguage.pathToLogo} alt="Selected flag" />
          ) : (
            "Selecionar idioma"
          )}

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
        </li>
      </ul>
    </nav>
  );
}

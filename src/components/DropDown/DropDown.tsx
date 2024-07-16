// External Libraries
import { useEffect, useState } from "react"

// Services
import languagesJson from "../../../public/data/languages.json"

// Styles
import "./dropdown.css"
import React from "react"

interface Language {
  pathToLogo: string
  pathToData: string
}

interface Props {
  selectedPath: React.Dispatch<React.SetStateAction<string>>
}

export default function Dropdown({ selectedPath }: Props) {

  // Constants
  const [isOpen, setIsOpen] = useState(false)
  const languages: Language[] = languagesJson.languages
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(languages[0] || null)

  // Effects 
  useEffect(() => {  
    const savedLanguage = localStorage.getItem("selectedLanguage")
    
    if (savedLanguage) {
      const savedLangObj = JSON.parse(savedLanguage)
      const matchedLang = languages.find(lang => lang.pathToData === savedLangObj.pathToData)
      
      setSelectedLanguage(savedLangObj)
      
      if(matchedLang) {
        selectedPath(matchedLang.pathToData)  
      }
    }
  }, [languages, selectedPath])

 // Functions
  function handleLanguageClick(lang: Language){
    setSelectedLanguage(lang)
    setIsOpen(false)
    selectedPath(lang.pathToData)
    localStorage.setItem("selectedLanguage", JSON.stringify(lang))
  }

  function onDropDownClick(){ 
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown-conteiner">
      <div>
        <div
          className="dropdown"
          onClick={onDropDownClick}
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
  )
}

// External Libraries
import React, { useState } from "react"

// Components
import DropDown from "../DropDown/dropdown"
import MobileNav from "./components/Mobile/mobileNav"
import MobileLinks from "./components/Mobile/mobileLinks"
import DefaultLinks from "./components/Default/defaultLinks"

// Types
import { links } from "../../Interfaces/links"

// Hooks
import useWindowWidth from "../../hooks/useWindowWidth"

// Styles
import "./nav.css"

interface NavigationTexts {
  help: string
  guide: string
  aboutUs: string
  contact: string
}

interface Props {
  links?: links
  texts?: NavigationTexts
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>
}

export default function Navigation({links, texts, setSelectedPath }: Props) {
  // Hooks
  const windowWidth = useWindowWidth()
  
  // States
  const [clicked, setClicked] = useState(false)

  return (
    <div className="nav-conteiner">
      <nav
        className="navigation"
        style={
          windowWidth <= 809
            ? { justifyContent: "space-between" }
            : { justifyContent: "flex-start", alignContent: "center" }
        }
      >
        <div className="text-conteiner">
          <a href={links?.logo} target="_blank">
            <img className="beaba-logo" src={"/images/Beaba.png"} alt="Logo do Beaba" />
          </a>
        </div>
        
        {windowWidth <= 809 ? (
          <div className="navigation-buttons">
            <DropDown selectedPath={setSelectedPath} />
            <MobileNav clicked={clicked} setClicked={setClicked} />
          </div>
        ) : (
          <>
            <div className="navigation-buttons">
              <DefaultLinks links={links} texts={texts} />
            </div>
            <DropDown selectedPath={setSelectedPath} />
          </>
        )}
        
        <div className="divider"></div>
      </nav>
      
      {windowWidth <= 809 && clicked ? <MobileLinks links={links} texts={texts} /> : " "}
    </div>
  )
}

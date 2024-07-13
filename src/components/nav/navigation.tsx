// External Libraries
import React, { useState } from "react"

// Components
import DropDown from "../DropDown/dropdown"
import MobileNav from "./Subcomponents/Mobile/mobileNav"
import MobileLinks from "./Subcomponents/Mobile/mobileLinks"
import DefaultLinks from "./Subcomponents/Default/defaultLinks"

// Types
import { links } from "../../Interfaces/links"

// Hooks
import useWindowWidth from "../../hooks/useWindowWidth"

// Styles
import "./nav.css"

interface NavigationTexts {
  Help: string
  Guide: string
  AboutUs: string
  Contact: string
}

interface SelectPath {
  links?: links
  texts?: NavigationTexts
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>
}

export default function Navigation({links, texts, setSelectedPath }: SelectPath) {
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
          <a href={links?.Logo} target="_blank">
            <img className="beaba-logo" src={"/Images/Beaba.png"} alt="Logo do Beaba" />
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

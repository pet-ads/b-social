import "./nav.css";
import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";
import { links } from "../../Interfaces/links";
import useWindowWidth from "../../hooks/useWindowWidth";
import MobileNav from "./subcomponents/Mobile/mobileNav";
import MobileLinks from "./subcomponents/Mobile/mobileLinks";
import DefaultLinks from "./subcomponents/Default/defaultLinks";

interface NavigationTexts {
  Guide: string;
  AboutUs: string;
  Contact: string;
  Help: string;
}

interface SelectPath {
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
  links?: links;
  texts?: NavigationTexts;
}

export default function Navigation({ setSelectedPath, links, texts }: SelectPath) {
  const windowWidth = useWindowWidth();
  const [clicked, setClicked] = useState(false);

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
  );
}

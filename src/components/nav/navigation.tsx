import "./nav.css";
import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";
import BeabaLogo from "../../../public/Images/Beaba.png";
import useWindowWidth from "../../hooks/useWindowWidth";
import MobileNav from "./subcomponents/Mobile/mobileNav";
import MobileLinks from "./subcomponents/Mobile/mobileLinks";
import DefaultLinks from "./subcomponents/Default/defaultLinks";
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
interface SelectPath {
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
  links?: links;
}
export default function Navigation({ setSelectedPath, links }: SelectPath) {
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
            <img className="beaba-logo" src={BeabaLogo} alt="Logo do Beaba" />
          </a>
        </div>
        {windowWidth <= 809 ? (
          <div className="navigation-buttons">
            <DropDown selectedPath={setSelectedPath} />
            <MobileNav clicked={clicked} setClicked={setClicked} />{" "}
          </div>
        ) : (
          <>
            <div className="navigation-buttons">
              <DefaultLinks links={links} />
            </div>
            <DropDown selectedPath={setSelectedPath} />
          </>
        )}

        <div className="divider"></div>
      </nav>
      {windowWidth <= 809 && clicked ? <MobileLinks /> : " "}
    </div>
  );
}

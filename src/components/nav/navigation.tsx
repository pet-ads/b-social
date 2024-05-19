import "./nav.css";
import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";
import useWindowWidth from "../../hooks/useWindowWidth";
import MobileNav from "./subcomponents/Mobile/mobileNav";
import MobileLinks from "./subcomponents/Mobile/mobileLinks";
import DefaultLinks from "./subcomponents/Default/defaultLinks";

interface SelectPath {
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
}
export default function Navigation({ setSelectedPath }: SelectPath) {
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
        <div className="text-conteiner">Beaba</div>
        {windowWidth <= 809 ? (
          <div className="navigation-buttons">
            <DropDown selectedPath={setSelectedPath} />
            <MobileNav clicked={clicked} setClicked={setClicked} />{" "}
          </div>
        ) : (
          <>
            <div className="navigation-buttons">
              <DefaultLinks />
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

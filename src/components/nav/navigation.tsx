import "./nav.css";
import React, { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import MobileNav from "./subcomponents/Mobile/mobileNav";
import MobileLinks from "./subcomponents/Mobile/mobileLinks";
import DefaultLinks from "./subcomponents/Default/defaultLinks";
import LangSettings from "../Language/language";
interface SelectPath {
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
  selectedPath: string;
}
export default function Navigation({ setSelectedPath, selectedPath }: SelectPath) {
  const windowWidth = useWindowWidth();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="NavConteiner">
      <nav
        className="navigation"
        style={windowWidth <= 809 ? { justifyContent: "space-between" } : { justifyContent: "flex-start" }}
      >
        <div className="textConteiner">Beaba</div>
        {windowWidth <= 809 ? (
          <div className="navigationButtons">
            <LangSettings setSelectedPath={setSelectedPath} selectedPath={selectedPath} />{" "}
            <MobileNav clicked={clicked} setClicked={setClicked} />{" "}
          </div>
        ) : (
          <>
            <div className="navigationButtons">
              <DefaultLinks />
            </div>
            <LangSettings setSelectedPath={setSelectedPath} selectedPath={selectedPath} />
          </>
        )}
        <div className="divider"></div>
      </nav>
      {windowWidth <= 809 && clicked ? <MobileLinks /> : " "}
    </div>
  );
}

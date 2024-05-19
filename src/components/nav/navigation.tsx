import "./nav.css";
import React, { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import MobileNav from "./subcomponents/Mobile/mobileNav";
import MobileLinks from "./subcomponents/Mobile/mobileLinks";
import DefaultLinks from "./subcomponents/Default/defaultLinks";
import DropDown from "../DropDown/DropDown";

interface SelectPath {
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
}
export default function Navigation({ setSelectedPath }: SelectPath) {
  const windowWidth = useWindowWidth();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="NavConteiner">
      <nav
        className="navigation"
        style={
          windowWidth <= 809
            ? { justifyContent: "space-between" }
            : { justifyContent: "flex-start", alignContent: "center" }
        }
      >
        <div className="textConteiner">Beaba</div>
        {windowWidth <= 809 ? (
          <div className="navigationButtons">
            {/* <LangSettings setSelectedPath={setSelectedPath} selectedPath={selectedPath} />{" "}
             */}
            <DropDown selectedPath={setSelectedPath} />
            <MobileNav clicked={clicked} setClicked={setClicked} />{" "}
          </div>
        ) : (
          <>
            <div className="navigationButtons">
              <DefaultLinks />
            </div>
            <DropDown selectedPath={setSelectedPath} />
            {/* <LangSettings setSelectedPath={setSelectedPath} selectedPath={selectedPath} />*/}
          </>
        )}

        <div className="divider"></div>
      </nav>
      {windowWidth <= 809 && clicked ? <MobileLinks /> : " "}
    </div>
  );
}

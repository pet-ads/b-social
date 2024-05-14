import "./nav.css";
import { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import MobileNav from "./subcomponents/Mobile/mobileNav";
import MobileLinks from "./subcomponents/Mobile/mobileLinks";
import DefaultLinks from "./subcomponents/Default/defaultLinks";

export default function Navigation() {
  const windowWidth = useWindowWidth();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="NavConteiner">
      <nav
        className="navigation"
        style={windowWidth <= 809 ? { justifyContent: "space-between" } : { justifyContent: "flex-start" }}
      >
        <div className="textConteiner">Beaba</div>
        <div className="navigationButtons">
          {windowWidth <= 809 ? <MobileNav clicked={clicked} setClicked={setClicked} /> : <DefaultLinks />}
        </div>
        <div className="divider"></div>
      </nav>
      {windowWidth <= 809 && clicked ? <MobileLinks /> : " "}
    </div>
  );
}

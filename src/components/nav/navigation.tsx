import "./nav.css";
import DefaultLinks from "./subcomponents/Default/defaultLinks";
import { useEffect, useState } from "react";
import MobileNav from "./subcomponents/Mobile/mobileNav";
import MobileLinks from "./subcomponents/Mobile/mobileLinks";

export default function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

import "./nav.css";
import DefaultLinks from "./subcomponents/defaultLinks";
import { useEffect, useState } from "react";
import MobileNav from "./subcomponents/mobileNav";

export default function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      <nav className="navigation">
        <div className="textConteiner">Beaba</div>
        <div className="navigationButtons">{windowWidth <= 809 ? <MobileNav /> : <DefaultLinks />}</div>
        <div className="divider"></div>
      </nav>
    </div>
  );
}

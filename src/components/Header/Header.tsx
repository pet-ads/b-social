import { useEffect, useState } from "react";
import "./HeaderStyle.css";
import headerImage from "/Images/HeaderBear.webp";

export default function Header() {
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
    <header className="header">
      <div className="bearConteiner">
        <div className="headerImgConteiner">
          <img className="headerImage" decoding="async" src={headerImage} alt="Header Bear" />
        </div>
      </div>
      <div className="headerTextConteiner">
        <div className="title">
          <h1 className="h1">Beaba do câncer</h1>
        </div>
        <div className="subtitleConteiner">
          <h2 className="subtitle">
            {windowWidth <= 809 ? (
              "Tudo o que você precisa saber sobre câncer. Para pequenos pacientes e seus acompanhantes"
            ) : (
              <>
                Tudo o que você precisa saber sobre câncer.
                <br className="br" />
                Para pequenos pacientes e seus acompanhantes
              </>
            )}
          </h2>
        </div>
      </div>
    </header>
  );
}

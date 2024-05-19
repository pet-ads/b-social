import "./HeaderStyle.css";
import headerImage from "/Images/HeaderBear.webp";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function Header() {
  const windowWidth = useWindowWidth();

  return (
    <header className="header">
      <div className="bear-conteiner">
        <div className="header-img-conteiner">
          <img className="header-image" decoding="async" src={headerImage} alt="Header Bear" />
        </div>
      </div>
      <div className="header-text-conteiner">
        <div className="title">
          <h1 className="h1">Beaba do câncer</h1>
        </div>
        <div className="subtitle-conteiner">
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

import "./App.css";
import Navigation from "./components/nav/navigation";
import headerImage from "../public/Images/HeaderBear.webp";
function App() {
  return (
    <div className="main">
      <div className="contentConteiner">
        <Navigation />
        <header className="header">
          <div className="bearConteiner">
            <div className="headerImgConteiner">
              <img className="headerImage" decoding="async" src={headerImage} />
            </div>
          </div>
          <div className="headerTextConteiner">
            <div className="title">
              <h1 className="h1">Beaba do câncer</h1>
            </div>
            <div className="subtitleConteiner">
              <h2 className="subtitle">
                Tudo o que você precisa saber sobre câncer.
                <br />
                Para pequenos pacientes e seus acompanhantes
              </h2>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;

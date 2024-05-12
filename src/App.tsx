import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/nav/navigation";
function App() {
  return (
    <div className="main">
      <div className="contentConteiner">
        <Navigation />
        <div className="mainContent">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;

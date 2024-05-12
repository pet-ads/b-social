import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/nav/navigation";
function App() {
  return (
    <div className="main">
      <div className="contentConteiner">
        <Navigation />
        <Header />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import CardArea from "./components/Cards/CardArea";
import Header from "./components/Header/Header";
import HelpArea from "./components/HelpArea/HelpArea";
import Navigation from "./components/nav/navigation";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="main">
      <div className="contentConteiner">
        <Navigation />
        <Header />
        <Search />
        <CardArea />
        <HelpArea />
      </div>
    </div>
  );
}

export default App;

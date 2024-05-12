import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/nav/navigation";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="main">
      <div className="contentConteiner">
        <Navigation />
        <Header />
        <Search />
      </div>
    </div>
  );
}

export default App;

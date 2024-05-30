import "./App.css";
import { useState } from "react";
import CardProps from "./Interfaces/CardProps";
import useFetchData from "./hooks/useFetchData";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Search from "./components/search/Search";
import CardArea from "./components/Cards/CardArea";
import HelpArea from "./components/HelpArea/HelpArea";
import Navigation from "./components/nav/navigation";

function App() {
  const [pathToData, setPathToData] = useState("/data/dataPTBR.json");
  const data = useFetchData(pathToData);
  const cards = data?.Card || [];
  const links = data?.Links;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

  return (
    <div className="main">
      <div className="contentConteiner">
        <Navigation setSelectedPath={setPathToData} links={links} />
        <Header />
        <Search setIsCardModalOpen={setIsModalOpen} setSelectedCard={setSelectedCard} data={cards} />
        <CardArea
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          data={cards}
        />
        <HelpArea Btn={links?.Btn} />
        <Footer Instagram={links?.Instagram} mail={links?.mail} />
      </div>
    </div>
  );
}

export default App;

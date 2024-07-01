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

const [isModalOpen, setIsModalOpen] = useState(false);
const [pathToData, setPathToData] = useState("/data/dataPTBR.json");
const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);


const data = useFetchData(pathToData);

const links = data?.Links;
const cards = data?.Card || [];
const FooterContent = data?.Texts.Footer;
const HeaderContent = data?.Texts.Header;
const CollaborateContent = data?.Texts.HelpArea;
const NavigationsContent = data?.Texts.Navigation;
  
const navlinks = {
  Logo: links?.Logo,
  Guia: links?.Guia,
  Help: links?.Help,
  aboutUs: links?.aboutUs,
  Contact: links?.Contact,
};

  return (
    <div className="main">
      <div className="contentConteiner">
      <Navigation setSelectedPath={setPathToData} links={navlinks} texts={NavigationsContent} />        
        <Header texts={HeaderContent} />
        
        <Search setIsCardModalOpen={setIsModalOpen} setSelectedCard={setSelectedCard} data={cards} />
        
        <CardArea
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          data={cards}
        />
        
        <HelpArea texts={CollaborateContent} Btn={links?.Btn} />
        
        <Footer Instagram={links?.Instagram} mail={links?.mail} texts={FooterContent} />
      </div>
    </div>
  );
}

export default App;

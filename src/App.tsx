import "./App.css";
import CardArea from "./components/Cards/CardArea";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import HelpArea from "./components/HelpArea/HelpArea";
import Navigation from "./components/nav/navigation";
import Search from "./components/search/Search";
import LangSettings from "./components/Language/language";
import { useState, useEffect } from "react";

interface CardContentI {
  id: string;
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
}

function App() {
  const URL_DATA_PTBR = "/data/dataPTBR.json";
  const URL_DATA_EN = "/data/dataEn.json";
  const [data, setData] = useState<CardContentI[]>([]);
  const [pathToData, setPathToData] = useState(URL_DATA_PTBR);
  const [selectPath, setSelectedPath] = useState("pt-br");

  useEffect(() => {
    selectPath === "pt-br" ? setPathToData(URL_DATA_PTBR) : setPathToData(URL_DATA_EN);

    const fetchData = async () => {
      try {
        const response = await fetch(pathToData);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Não foi possível encotrar os dados");
      }
    };
    fetchData();
  }, [pathToData, selectPath]);
  return (
    <div className="main">
      <div className="contentConteiner">
        <Navigation />
        <Header />
        <LangSettings setSelectedPath={setSelectedPath} />
        <Search />
        <CardArea data={data} />
        <HelpArea />
        <Footer />
      </div>
    </div>
  );
}

export default App;

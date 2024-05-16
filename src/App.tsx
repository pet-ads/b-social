import "./App.css";
import { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Search from "./components/search/Search";
import CardArea from "./components/Cards/CardArea";
import HelpArea from "./components/HelpArea/HelpArea";
import Navigation from "./components/nav/navigation";
import LangSettings from "./components/Language/language";

function App() {
  const URL_DATA_PTBR = "/data/dataPTBR.json";
  const URL_DATA_EN = "/data/dataEn.json";
  const [selectPath, setSelectedPath] = useState("pt-br");
  const pathToData = selectPath === "pt-br" ? URL_DATA_PTBR : URL_DATA_EN;
  const data = useFetchData(pathToData, selectPath);

  return (
    <div className="main">
      <div className="contentConteiner">
        <Navigation setSelectedPath={setSelectedPath} selectedPath={selectPath} />
        <Header />
        <LangSettings setSelectedPath={setSelectedPath} selectedPath={selectPath} />
        <Search data={data} />
        <CardArea data={data} />
        <HelpArea />
        <Footer />
      </div>
    </div>
  );
}

export default App;

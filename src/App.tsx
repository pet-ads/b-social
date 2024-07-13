// External Libraries
import { useState } from "react"

// Components
import CardProps from "./Interfaces/CardProps"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Search from "./components/search/Search"
import CardArea from "./components/Cards/CardArea"
import Navigation from "./components/nav/navigation"
import HelpArea from "./components/HelpArea/HelpArea"

// Hooks
import useFetchData from "./hooks/useFetchData"

// Styles
import "./App.css"

export default function App() {
// States
const [isModalOpen, setIsModalOpen] = useState(false)
const [pathToData, setPathToData] = useState("/data/dataPTBR.json")
const [selectedCard, setSelectedCard] = useState<CardProps | null>(null)

// Hooks
const data = useFetchData(pathToData)

// Constants
const links = data?.Links
const cards = data?.Card || []
const FooterContent = data?.Texts.Footer
const HeaderContent = data?.Texts.Header
const CollaborateContent = data?.Texts.HelpArea
const NavigationsContent = data?.Texts.Navigation 
const navlinks = {
  Logo: links?.Logo,
  Guia: links?.Guia,
  Help: links?.Help,
  aboutUs: links?.aboutUs,
  Contact: links?.Contact,
}

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
  )
}



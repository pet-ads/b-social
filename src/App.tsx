// External Libraries
import { useState } from "react"

// Components
import CardProps from "./interfaces/CardProps"
import Footer from "./components/Footer/footer"
import Header from "./components/Header/header"
import Search from "./components/Search/search"
import CardArea from "./components/Card/cardarea"
import Navigation from "./components/Nav/navigation"
import HelpArea from "./components/HelpArea/helparea"

// Hooks
import useFetchData from "./hooks/useFetchData"

// Styles
import "./App.css"

export default function App() {
// States
const [isModalOpen, setIsModalOpen] = useState(false)
const [pathToData, setPathToData] = useState("/data/dataPT-Br.json")
const [selectedCard, setSelectedCard] = useState<CardProps | null>(null)

// Hooks
const data = useFetchData(pathToData)

// Constants
const links = data?.links
const cards = data?.card || []
const FooterContent = data?.texts.footer
const HeaderContent = data?.texts.header
const CollaborateContent = data?.texts.helpArea
const NavigationsContent = data?.texts.navigation 

const navlinks = {
  logo: links?.logo,
  guia: links?.guia,
  help: links?.help,
  aboutUs: links?.aboutUs,
  contact: links?.contact,
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
        
        <HelpArea texts={CollaborateContent} btn={links?.btn} />
        
        <Footer instagram={links?.instagram} mail={links?.mail} texts={FooterContent} />
      </div>
    </div>
  )
}



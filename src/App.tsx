// External Libraries
import { useState } from "react"

// Components
import CardProps from "./Interfaces/CardProps"
import Footer from "./components/Footer/footer"
import Header from "./components/Header/Header"
import Search from "./components/search/Search"
import CardArea from "./components/Card/cardarea"
import Navigation from "./components/nav/navigation"
import HelpArea from "./components/HelpArea/HelpArea"

// Hooks
import useFetchData from "./hooks/useFetchData"

// Styles
import "./App.css"
import { BASEURL } from "./constants"

export default function App() {
// States
const [isModalOpen, setIsModalOpen] = useState(false)
const [pathToData, setPathToData] = useState("/data/dataPT-Br.json")
const [selectedCard, setSelectedCard] = useState<CardProps | null>(null)

// Hooks
const data = useFetchData(BASEURL+pathToData)

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



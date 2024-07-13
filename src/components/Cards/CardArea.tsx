// Components
import Card from "./components/card"
import CardModal from "../CardModal/cardmodal"

// Styles 
import "./cardarea.css"

interface Props {
  id: string
  theme?: string
  cardImg: string
  bgColor: string
  cardText: string
  cardTitle: string
  bgColorTheme?: string
  recommendation?: string
  cardExpandedText?: string
  bgColorRecommendation?: string
}

interface Data {
  data: Props[]
  isModalOpen: boolean
  selectedCard: Props | null
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedCard: React.Dispatch<React.SetStateAction<Props | null>>
}

export default function CardArea({ data, isModalOpen, selectedCard, setIsModalOpen,  setSelectedCard }: Data) {
  // Functions
  function  openModal (card: Props){
    setSelectedCard(card)
    setIsModalOpen(true)
  }

  function  openModalByTitle  (title: string)  {
    const card = data.find((card) => card.cardTitle === title)
    if (card) {
        setSelectedCard(card)
    }
  }

  function closeModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((event.target as HTMLDivElement).className === "modal-background" || (event.target as HTMLDivElement).className === "close-modal") 
      setIsModalOpen(false)
  }

  return (
    <div className="card-area">
      <div className="card-row">
        {data.sort((a,b)=> a.cardTitle.localeCompare(b.cardTitle)).map((item) =>(
          <Card
            key={item.id}
            bgColor={item.bgColor}
            CardImg={item.cardImg}
            CardText={item.cardText}
            CardTitle={item.cardTitle}
            onClick={() => openModal(item)}
          />
        ))}
      </div>
      
      {isModalOpen && selectedCard && (
        <CardModal
        theme={selectedCard.theme}
        bgColor={selectedCard.bgColor}
        CardImg={selectedCard.cardImg}
        CardTitle={selectedCard.cardTitle}
        bgColorTheme={selectedCard.bgColorTheme}
        CardText={selectedCard.cardExpandedText}
        recommendation={selectedCard.recommendation}
        bgColorRecommendation={selectedCard.bgColorRecommendation}
        closeModal={closeModal}
        onRecommendationClick={openModalByTitle}
        />
      )}
    </div>
  )
}

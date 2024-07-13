// Components
import Card from "./subcomponents/Card"
import CardModal from "../CardModal/CardModal"

// Styles 
import "./cardArea.css"

interface Props {
  id: string
  theme?: string
  CardImg: string
  bgColor: string
  CardText: string
  CardTitle: string
  bgColorTheme?: string
  recommendation?: string
  CardExpandedText?: string
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
  function  openModal (card: Props){
    setSelectedCard(card)
    setIsModalOpen(true)
  }

  function  openModalByTitle  (title: string)  {
    const card = data.find((card) => card.CardTitle === title)
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
        {data.sort((a,b)=> a.CardTitle.localeCompare(b.CardTitle)).map((item) =>(
          <Card
            key={item.id}
            bgColor={item.bgColor}
            CardImg={item.CardImg}
            CardText={item.CardText}
            CardTitle={item.CardTitle}
            onClick={() => openModal(item)}
          />
        ))}
      </div>
      
      {isModalOpen && selectedCard && (
        <CardModal
        theme={selectedCard.theme}
        bgColor={selectedCard.bgColor}
        CardImg={selectedCard.CardImg}
        CardTitle={selectedCard.CardTitle}
        bgColorTheme={selectedCard.bgColorTheme}
        CardText={selectedCard.CardExpandedText}
        recommendation={selectedCard.recommendation}
        bgColorRecommendation={selectedCard.bgColorRecommendation}
        closeModal={closeModal}
        onRecommendationClick={openModalByTitle}
        />
      )}
    </div>
  )
}

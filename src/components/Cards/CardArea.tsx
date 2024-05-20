import "./cardArea.css";
import CardModal from "../CardModal/CardModal";
import Card from "./subcomponents/Card";

interface CardProps {
  id: string;
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
  CardExpandedText?: string;
  recommendation?: string;
  bgColorRecommendation?: string;
  theme?: string;
  bgColorTheme?: string;
}

interface Data {
  data: CardProps[];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: CardProps | null;
  setSelectedCard: React.Dispatch<React.SetStateAction<CardProps | null>>
}

export default function CardArea({ data, isModalOpen, setIsModalOpen, selectedCard, setSelectedCard }: Data) {
  const openModal = (card: CardProps) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const openModalByTitle = (title: string) => {
    setIsModalOpen(false);
    const card = data.find((card) => card.CardTitle === title);
    if (card) {
      setTimeout(() => {
        setSelectedCard(card);
        setIsModalOpen(true);
      }, 2);
    }
  };

  return (
    <div className="card-area">
      <div className="card-row">
        {data.map((item) => (
          <Card
            key={item.id}
            CardImg={item.CardImg}
            CardTitle={item.CardTitle}
            CardText={item.CardText}
            bgColor={item.bgColor}
            onClick={() => openModal(item)}
          />
        ))}
      </div>
      {isModalOpen && selectedCard && (
        <CardModal
          CardImg={selectedCard.CardImg}
          CardTitle={selectedCard.CardTitle}
          CardText={selectedCard.CardExpandedText}
          bgColor={selectedCard.bgColor}
          recommendation={selectedCard.recommendation}
          bgColorRecommendation={selectedCard.bgColorRecommendation}
          theme={selectedCard.theme}
          bgColorTheme={selectedCard.bgColorTheme}
          closeModal={() => setIsModalOpen(false)}
          onRecommendationClick={openModalByTitle}
        />
      )}
    </div>
  );
}

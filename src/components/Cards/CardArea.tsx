import "./cardArea.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
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
}

export default function CardArea({ data }: Data) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);
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
        <Modal
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

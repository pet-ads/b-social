import "./cardArea.css";
import Card from "./subcomponents/Card";
import { useState } from 'react';
import Modal from "../Modal/Modal";

interface CardContentI {
  id: string;
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
}

interface iData {
  data: CardContentI[];
}

export default function CardArea({ data }: iData) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardContentI | null>(null);
  const openModal = (card: CardContentI) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };
  return (
    <div className="cardArea">
      <div className="CardRow">
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
          CardText={selectedCard.CardText}
          bgColor={selectedCard.bgColor}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

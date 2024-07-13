// External Libraries
import { Dispatch, SetStateAction } from "react";

// Types
import CardProps from "../../interfaces/CardProps";


// Styles
import "./search.css";

interface Props {
  data: CardProps[];
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsCardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCard: React.Dispatch<React.SetStateAction<CardProps | null>>;
}

export default function SearchResult({
  data,
  setModalOpen,
  setIsCardModalOpen,
  setSelectedCard,
}: Props) {
  // Functions
  function onSearchResultClick(card: CardProps) {
    setSelectedCard(card);
    setModalOpen(false);
    setIsCardModalOpen(true);
  }

  return (
    <div className="result-container">
      <ul>
        {data.map((card) => (
          <li key={card.id} className="result" onClick={() => onSearchResultClick(card)}>
            <p>{card.cardTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

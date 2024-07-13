// External Libraries
import { Dispatch, SetStateAction } from "react";

// Styles
import "./search.css";

interface CardProps {
  id: string;
  theme?: string;
  bgColor: string;
  cardImg: string;
  cardText: string;
  cardTitle: string;
  bgColorTheme?: string;
  recommendation?: string;
  cardExpandedText?: string;
  bgColorRecommendation?: string;
}

interface SearchComponentProps {
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
}: SearchComponentProps) {
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

// External Libraries
import { Dispatch, SetStateAction } from "react"

// Styles
import "./search.css"

interface CardProps {
  id: string
  theme?: string
  bgColor: string
  CardImg: string
  CardText: string
  CardTitle: string
  bgColorTheme?: string
  recommendation?: string
  CardExpandedText?: string
  bgColorRecommendation?: string
}

interface SearchComponent {
  data: CardProps[];
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsCardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCard: React.Dispatch<React.SetStateAction<CardProps | null>>
}

export default function SearchResult({ data, setModalOpen, setIsCardModalOpen, setSelectedCard }: SearchComponent) {
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
            <p>{card.CardTitle}</p>
          </li> 
        ))}
      </ul>
    </div>
    );
}
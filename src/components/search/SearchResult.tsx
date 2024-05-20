import { Dispatch, SetStateAction } from "react";
import "./search.css"

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

  interface SearchComponent {
    data: CardProps[];
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    setIsCardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedCard: React.Dispatch<React.SetStateAction<CardProps | null>>
  }

export default function SearchResult({data, setModalOpen, setIsCardModalOpen, setSelectedCard  }: SearchComponent) {
  
    function openModal(card: CardProps) {
      setSelectedCard(card);
      setModalOpen(false);
      setIsCardModalOpen(true);

    }

    return (
        <div className="result-container">
            <ul>
            {data.map((card) => (
                <li key={card.id} className="result" onClick={() => openModal(card)}>
                    <p>{card.CardTitle}</p>
                </li> 
            ))}
            </ul>
        </div>
    );
}
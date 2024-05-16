import "./search.css"

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

export default function SearchResult({data}: iData) {
    return (
        <div className="resultContainer">
            <ul>
            {data.map((card) => (
                <li key={card.id} className="result">
                    <p>{card.CardTitle}</p>
                </li> 
            ))}
            </ul>
        </div>
    );
}
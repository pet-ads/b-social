import "./search.css"

interface CardContent{
    id: string;
    CardImg: string;
    CardTitle: string;
    CardText: string;
    bgColor: string;
  }

  interface Data {
    data: CardContent[];
  }

export default function SearchResult({data}: Data) {
    return (
        <div className="result-container">
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
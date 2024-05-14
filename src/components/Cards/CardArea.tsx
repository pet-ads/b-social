import "./cardArea.css";
import Card from "./subcomponents/Card";
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
          />
        ))}
      </div>
    </div>
  );
}

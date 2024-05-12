import { useState, useEffect } from "react";
import "./cardArea.css";
import Card from "./subcomponents/Card";

interface CardContentI {
  id: string;
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
}

export default function CardArea() {
  const [data, setData] = useState<CardContentI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../public/data/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Não foi possível encotrar os dados");
      }
    };
    fetchData();
  }, []);

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

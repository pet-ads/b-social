import "./CardStyle.css";
import Tag from "./subComponent/Tag";
import { TagType } from "./subComponent/TagTypeInterface";

interface CardType {
  image: string;
  title: string;
  text: string;
  tag: TagType;
  onTagClick: (index: number) => void;
}

export default function Card({ image, title, text, tag, onTagClick }: CardType) {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img className="cardImage" src={image} />
      </div>
      <div className="cardContent" style={{ color: "#603A17" }}>
        <div className="cardMainContent">
          <div className="cardTitle">{title}</div>
          <div className="cardText">{text}</div>
        </div>
        <div className="indicatedTopicContainer">
          <p className="indicatedTopicTitle">Veja também</p>
          <Tag
            text={tag.text}
            textColor={tag.textColor}
            backgroundColor={tag.backgroundColor}
            number={tag.number}
            onIndexChange={onTagClick} // Passa o callback para Tag
          />
        </div>
      </div>
    </div>
  );
}

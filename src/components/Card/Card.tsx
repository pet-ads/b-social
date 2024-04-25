import Tag from "./subComponent/Tag";
import { TagType } from "./subComponent/TagTypeInterface";
import "./CardStyle.css";

interface CardType {
  image: string;
  title: string;
  text: string;
  tag: TagType;
}

export default function Card({ image, title, text, tag }: CardType) {
  const imagePath: string = "./../../../public/Images/" + image;

  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img className="cardImage" src={imagePath} />
      </div>
      <div className="cardContent" style={{ color: "#603A17" }}>
        <div className="cardMainContent">
          <div className="cardTitle">{title}</div>
          <div className="cardText">{text}</div>
        </div>
        <div className="indicatedTopicContainer">
          <p className="indicatedTopicTitle">Veja também</p>
          <Tag text={tag.text} textColor={tag.textColor} backgroundColor={tag.backgroundColor} number={tag.number} />
        </div>
      </div>
    </div>
  );
}

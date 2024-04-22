import Tag from "./subComponent/Tag";
import {TagType} from "./subComponent/TagTypeInterface";
import "./CardStyle.css";

interface CardType {
    image: string,
    title: string,
    text: string,
    tag: TagType
}

export default function Card({image, title, text, tag}: CardType) {
    return (
        <div className="cardContainer">
            <div className="cardImage">
                {image}
            </div>
            <div className="cardContent">
                <div className="cardTitle">{title}</div>
                <div className="cardText">{text}</div>
                <div className="indicatedTopicContainer">
                    <div className="indicatedTopicTitle"><p>Veja também</p></div>
                    <Tag text={tag.text} color={tag.color}/>
                </div>
            </div>
        </div>
    );
}
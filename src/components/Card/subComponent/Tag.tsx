import { TagType } from "./TagTypeInterface";
import "./TagStyle.css";
import { useState } from "react";
import Data from "../../../../public/data/data.json";

export default function Tag({ text, textColor, backgroundColor, number, onIndexChange }: TagType) {
  const [reference, setReference] = useState("");

  const handleClick = () => {
    setReference(text);
    const index = Data.findIndex((element) => element.title === text);
    if (onIndexChange) onIndexChange(index); // Chama o callback com o índice encontrado
    reference;
  };

  return (
    <div className="TagContainer" onClick={handleClick}>
      <div className="Tag" style={{ backgroundColor: backgroundColor, color: textColor }}>
        <p>{text}</p>
      </div>
      <p>{number}</p>
    </div>
  );
}

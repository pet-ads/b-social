import "./TagStyle.css";
import { useState } from "react";
import { TagType } from "./TagTypeInterface";
import Data from "../../../../public/data/data.json";
import { useSliderContext } from "../../Slider/SliderContext";

export default function Tag({ text, textColor, backgroundColor, number }: TagType) {
  const [reference, setReference] = useState("");
  const { goToSlide } = useSliderContext();

  const handleClick = () => {
    setReference(text);
    const index = Data.findIndex((element) => element.title === text);
    if (index >= 0) goToSlide(index);
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

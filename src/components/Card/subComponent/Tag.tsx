import {TagType} from "./TagTypeInterface"
import "./TagStyle.css"

export default function Tag({text, textColor, backgroundColor, number}: TagType) {
    return (
        <div className="TagContainer">
            <div className="Tag" style={{backgroundColor: backgroundColor, color: textColor}}>
                <p>{text}</p>
            </div>
            <p>{number}</p>
        </div>
        
    );
}
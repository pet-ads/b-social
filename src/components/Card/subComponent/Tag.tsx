import {TagType} from "./TagTypeInterface"
import "./TagStyle.css"

export default function Tag({text, color}: TagType) {
    return (
        <div className="TagContainer" style={{backgroundColor: color}}>
            <p>{text}</p>
        </div>
        
    );
}
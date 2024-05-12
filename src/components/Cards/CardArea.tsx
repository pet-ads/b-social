import "./cardArea.css";
import walkingBear from "../../../public/Images/walkingBear.gif";
export default function CardArea() {
  return (
    <div className="cardArea">
      <div className="CardRow">
        <div className="Card">
          <a className="anchor">
            <div className="imgArea">
              <div className="imgConteiner">
                <img className="CardImg" decoding="async" src={walkingBear} />
              </div>
            </div>
          </a>
          <div className="textArea">
            <div className="cardTitle">
              <h3 className="h3">Amor</h3>
            </div>
            <div className="cardText">
              <p className="info">Learn about hosting built for scale and reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
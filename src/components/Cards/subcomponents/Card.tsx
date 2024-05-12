import "./card.css";
import walkingBear from "/Images/walkingBear.gif";

export default function Card() {
  return (
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
  );
}

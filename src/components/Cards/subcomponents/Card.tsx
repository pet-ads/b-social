import "./card.css";
interface CardContentI {
  id?: string;
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
  onClick?: () => void;
}
export default function Card({ CardImg, CardTitle, CardText, bgColor, onClick}: CardContentI) {
  return (
    <div className="Card">
      <a className="anchor" style={{ backgroundColor: `${bgColor}`, cursor: 'pointer'}} onClick={onClick}>
        <div className="imgArea">
          <div className="imgConteiner">
            <img className="CardImg" decoding="async" src={CardImg} />
          </div>
        </div>
      </a>
      <div className="textArea">
        <div className="cardTitle">
          <h3 className="h3">{CardTitle}</h3>
        </div>
        <div className="cardText">
          <p className="info">{CardText}</p>
        </div>
      </div>
    </div>
  );
}

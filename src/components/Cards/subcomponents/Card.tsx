import "./card.css";
interface CardContentI {
  id?: string;
  CardImg: string;
  CardTitle: string;
  CardText?: string;
  bgColor: string;
  CardExpandedText?: string;
  recommendation?: string;
  bgColorRecommendation?: string;
  theme?: string;
  bgColorTheme?: string;
  onClick?: () => void;
  onRecommendationClick?: (title: string) => void;
}
export default function Card({
  CardImg,
  CardTitle,
  CardText,
  bgColor,
  recommendation,
  bgColorRecommendation,
  theme,
  bgColorTheme,
  onClick,
  onRecommendationClick,
}: CardContentI) {
  return (
    <div className="Card">
      <a className="anchor" style={{ backgroundColor: `${bgColor}`, cursor: "pointer" }} onClick={onClick}>
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
        {recommendation && theme && (
          <div className="recommendation-theme-container">
            <button className="theme" style={{ backgroundColor: bgColorTheme }}>
              {theme}
            </button>
            <button
              className="recommendation"
              style={{ backgroundColor: bgColorRecommendation, cursor: "pointer" }}
              onClick={() => onRecommendationClick && onRecommendationClick(recommendation)}
            >
              {recommendation}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

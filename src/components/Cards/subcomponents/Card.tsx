import "./card.css";
interface CardContent {
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
}: CardContent) {
  const isOpen = !!(recommendation && theme);
  return (
    <div className={`card ${isOpen ? "open" : ""}`}>
      <a className="anchor" style={{ backgroundColor: `${bgColor}`, cursor: "pointer" }} onClick={onClick}>
        <div className="img-area">
          <div className="img-conteiner">
            <img className="card-img" decoding="async" src={CardImg} />
          </div>
        </div>
      </a>
      <div className="text-area">
        <div className="card-title">
        {isOpen ? (
            <h1 className="h1">{CardTitle}</h1>
          ) : (
            <h3 className="h3">{CardTitle}</h3>
          )
        }
        </div>
        <div className="card-text">
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

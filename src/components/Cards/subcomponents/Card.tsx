// Styles
import "./card.css"

interface Props {
  id?: string
  theme?: string
  CardImg: string
  bgColor: string
  isModal?: boolean
  CardTitle: string
  CardText?: string
  bgColorTheme?: string
  recommendation?: string
  CardExpandedText?: string
  bgColorRecommendation?: string
  onClick?: () => void
  onRecommendationClick?: (title: string) => void
}
export default function Card({
  theme,
  isModal,
  CardImg,
  bgColor,
  CardText,
  CardTitle,
  bgColorTheme,
  recommendation,
  bgColorRecommendation,
  onClick,
  onRecommendationClick,
}: Props) {
  
  const isOpen = !!(recommendation && theme);
  const isGif: boolean = CardImg.includes(".gif");

  return (
    <div className={`card ${isOpen ? "open" : ""}`} onClick={onClick} style={{cursor: "pointer"}}>
      <a className={`${!isOpen ? "anchor" : "open-anchor"}`} style={{ backgroundColor: `${bgColor}`}} >
        <div className={`${isOpen ? (isGif ? "open-gif-area" : "open-img-area") : (isGif ? "gif-area" : "img-area")}`}>
          <div className="img-conteiner">
            <img className="card-img" decoding="async" src={CardImg} />
          </div>
        </div>
      </a>
      
      <div className="text-area">
        <div className="card-title">
        {isOpen ? (
            <h1 className="h1-card">{CardTitle}</h1>
          ) : (
            <h3 className="h3-card">{CardTitle}</h3>
          )
        }
        </div>
        
        <div className="card-text">
          <p className={isModal? "info-modal" : "info"}>{CardText}</p>
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

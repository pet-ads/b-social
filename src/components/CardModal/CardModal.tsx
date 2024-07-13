// External Libraries
import { useEffect } from "react"

// Components
import Card from "../Card/components/card"

// Styles
import "./cardmodal.css"

interface Props {
  theme?: string
  CardImg: string
  bgColor: string
  CardTitle: string
  CardText?: string
  bgColorTheme?: string
  recommendation?: string
  bgColorRecommendation?: string
  onRecommendationClick?: (recommendationTitle: string) => void
  closeModal?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export default function CardModal({
  theme,
  CardImg,
  bgColor,
  CardText,
  CardTitle,
  bgColorTheme,
  recommendation,
  bgColorRecommendation,
  closeModal,
  onRecommendationClick,
}: Props) {
// Effects
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-content">
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>
        
        <Card
          theme={theme}
          isModal={true}
          CardImg={CardImg}
          bgColor={bgColor}
          CardText={CardText}
          CardTitle={CardTitle}
          bgColorTheme={bgColorTheme}
          recommendation={recommendation}
          bgColorRecommendation={bgColorRecommendation}
          onRecommendationClick={onRecommendationClick}
        />
      </div>
    </div>
  );
}

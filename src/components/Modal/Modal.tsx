import "./modal.css";
import Card from '../Cards/subcomponents/Card';
import { useEffect  } from 'react';

interface ModalCardProps {
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
  recommendation: string;
  bgColorRecommendation: string;
  theme: string;
  bgColorTheme: string;
  closeModal: () => void;
  onRecommendationClick?: (recommendationTitle: string) => void;
}

export default function Modal({ CardImg, CardTitle, CardText, bgColor, 
     recommendation, bgColorRecommendation,theme, bgColorTheme,closeModal, onRecommendationClick }: ModalCardProps){
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <Card
                CardImg={CardImg}
                CardTitle={CardTitle}
                CardText={CardText}
                bgColor={bgColor}
                recommendation={recommendation}
                bgColorRecommendation={bgColorRecommendation}
                theme={theme}
                bgColorTheme={bgColorTheme}
                onRecommendationClick={onRecommendationClick}
            />
          </div>
        </div>
      );
    
}
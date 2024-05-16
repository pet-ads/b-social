import "./modal.css";
import Card from '../Cards/subcomponents/Card';
import { useEffect  } from 'react';

interface ModalCardProps {
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
  closeModal: () => void;
}

export default function Modal({ CardImg, CardTitle, CardText, bgColor, closeModal }: ModalCardProps){
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
            />
          </div>
        </div>
      );
    
}
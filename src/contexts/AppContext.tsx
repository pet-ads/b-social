import { ReactNode, createContext, useState } from "react";
import CardProps from "../Interfaces/CardProps";


interface AppContextType {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCard: CardProps | null;
    setSelectedCard: React.Dispatch<React.SetStateAction<CardProps | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderType{
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderType> = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

    return (
        <AppContext.Provider
            value={
                {isModalOpen,
                setIsModalOpen,
                selectedCard,
                setSelectedCard}
            }>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
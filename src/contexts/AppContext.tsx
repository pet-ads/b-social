// External Libraries
import { ReactNode, createContext, useState } from "react"

// Types
import CardProps from "../interfaces/CardProps"

interface AppContextType {
    isModalOpen: boolean
    selectedCard: CardProps | null    
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedCard: React.Dispatch<React.SetStateAction<CardProps | null>>
}

interface AppProviderType{
    children: ReactNode
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<AppProviderType> = ({children}) => {
    // Constants
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState<CardProps | null>(null)

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
    )
}
export default AppContext
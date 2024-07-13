// Hooks
import useWindowWidth from "../../hooks/useWindowWidth"

// Services
import headerImage from "/Images/HeaderBear.webp"

// Styles
import "./headerStyle.css"

interface Content{ 
  h1?: string 
  Part1?: string
  Part2?: string
  complete?: string
}

interface Props{ 
  texts?: Content
}

export default function Header({texts}: Props) {
  // Hooks
  const windowWidth = useWindowWidth()

  return (
    <header className="header">
      <div className="bear-conteiner">
        <div className="header-img-conteiner">
          <img className="header-image" decoding="async" src={headerImage} alt="Header Bear" />
        </div>
      </div>
      
      <div className="header-text-conteiner">
        <div className="title">
          <h1 className="h1">{texts?.h1}</h1>
        </div>
        
        <div className="subtitle-conteiner">
          <h2 className="subtitle">
            {windowWidth <= 809 ? (
             texts?.complete
            ) : (
              <>
                {texts?.Part1}
                <br className="br" />
               {texts?.Part2}
              </>
            )}
          </h2>
        </div>
      </div>
    </header>
  )
}

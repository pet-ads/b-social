// Hooks
import useWindowWidth from "../../hooks/useWindowWidth"

// Services
import headerImage from "/Images/HeaderBear.webp"

// Styles
import "./HeaderStyle.css"

interface Content{ 
  h1?: string 
  part1?: string
  part2?: string
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
                {texts?.part1}
                <br className="br" />
               {texts?.part2}
              </>
            )}
          </h2>
        </div>
      </div>
    </header>
  )
}

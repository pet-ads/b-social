// Hooks
import useWindowWidth from "../../hooks/useWindowWidth"

// Types
import { links } from "../../Interfaces/links"

// Styles
import "./footer.css"


interface FooterTexts {
  PET: string
  IFSP: string
  Developed: string
  MobileIFSP: string
}

interface FooterProps extends links {
  texts?: FooterTexts
}

export default function Footer({ Instagram, mail, texts }: FooterProps) {
  // Hooks
  const windowWidth = useWindowWidth()

  return (
    <div className="footer">
      <div className="general-conteiner">
        <div className="copy">
          <p className="copy-text">© Beaba org. 2023 </p>
        </div>

        {windowWidth <= 809 ? (
          <div>
            <p className="pet-signature">
              {texts?.Developed}
              
              <a href="http://petads.paginas.scl.ifsp.edu.br/">{texts?.PET}</a>
              
              <a href="https://scl.ifsp.edu.br" rel="noreferrer" target="_blank">
                {texts?.MobileIFSP}
              </a>
            </p>
          </div>
        ) : (
          <div>
            <p className="pet-signature">
              
              {texts?.Developed}
              
              <a href="http://petads.paginas.scl.ifsp.edu.br/">{texts?.PET}</a> @
              
              <a href="https://scl.ifsp.edu.br" rel="noreferrer" target="_blank">
                {texts?.IFSP}
              </a>
            </p>
          </div>
        )}

        <div className="social-media-conteiner">
          <div className="insta-conteiner">
            <p className="social-text">
              <a target="_blank" href={Instagram}>
                Instagram
              </a>
            </p>
          </div>

          <div className="mail-conteiner">
            <p className="social-text">
              <a href={`mailto:${mail}`}>Email</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

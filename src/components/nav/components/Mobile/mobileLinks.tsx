// Types
import { links } from "../../../../Interfaces/links"

// Styles
import "./mobileLinks.css"

interface Props {
  help: string
  guide: string
  aboutUs: string
  contact: string
}

export default function MobileLinks({ links, texts }: { links?: links, texts?: Props }) {
  return (
    <div className="mobile-links">
      <div className="mobile-link">
        <a href={links?.guia} target="_blank">
          <p>{texts?.guide}</p>
        </a>
      </div>
      
      <div className="mobile-link">
        <a href={links?.aboutUs} target="_blank">
          <p>{texts?.aboutUs}</p>
        </a>
      </div>
      
      <div className="mobile-link">
        <a href={`mailto:${links?.contact}`}>
          <p>{texts?.contact}</p>
        </a>
      </div>
      
      <div className="mobile-link">
        <a href={links?.help} target="_blank">
          <p>{texts?.help}</p>
        </a>
      </div>
    </div>
  )
}

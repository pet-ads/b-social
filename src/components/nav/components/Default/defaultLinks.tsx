// Types
import {links } from "../../../../Interfaces/links"

// Styles
import "./defaultLinks.css"

interface LinkTexts {
  help: string
  guide: string
  aboutUs: string
  contact: string
}

export default function DefaultLinks({ links, texts }: { links?: links, texts?: LinkTexts }) {
  return (
    <>
      <div className="link">
        <a href={links?.guia} target="_blank">
          <p>{texts?.guide}</p>
        </a>
      </div>
      
      <div className="link">
        <a href={links?.aboutUs} target="_blank">
          <p>{texts?.aboutUs}</p>
        </a>
      </div>
      
      <div className="link">
        <a href={`mailto:${links?.contact}`}>
          <p>{texts?.contact}</p>
        </a>
      </div>
      
      <div className="link">
        <a href={links?.help} target="_blank">
          <p>{texts?.help}</p>
        </a>
      </div>
    </>
  )
}

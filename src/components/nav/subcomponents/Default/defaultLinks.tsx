// Types
import {links } from "../../../../Interfaces/links"

// Styles
import "./defaultLinks.css"

interface LinkTexts {
  Help: string
  Guide: string
  AboutUs: string
  Contact: string
}

export default function DefaultLinks({ links, texts }: { links?: links, texts?: LinkTexts }) {
  return (
    <>
      <div className="link">
        <a href={links?.Guia} target="_blank">
          <p>{texts?.Guide}</p>
        </a>
      </div>
      
      <div className="link">
        <a href={links?.aboutUs} target="_blank">
          <p>{texts?.AboutUs}</p>
        </a>
      </div>
      
      <div className="link">
        <a href={`mailto:${links?.Contact}`}>
          <p>{texts?.Contact}</p>
        </a>
      </div>
      
      <div className="link">
        <a href={links?.Help} target="_blank">
          <p>{texts?.Help}</p>
        </a>
      </div>
    </>
  )
}

import "./mobileLinks.css";
import { links } from "../../../../Interfaces/links";

interface LinkTexts {
  Guide: string;
  AboutUs: string;
  Contact: string;
  Help: string;
}

export default function MobileLinks({ links, texts }: { links?: links, texts?: LinkTexts }) {
  return (
    <div className="mobile-links">
      <div className="mobile-link">
        <a href={links?.Guia} target="_blank">
          <p>{texts?.Guide}</p>
        </a>
      </div>
      <div className="mobile-link">
        <a href={links?.aboutUs} target="_blank">
          <p>{texts?.AboutUs}</p>
        </a>
      </div>
      <div className="mobile-link">
        <a href={`mailto:${links?.Contact}`}>
          <p>{texts?.Contact}</p>
        </a>
      </div>
      <div className="mobile-link">
        <a href={links?.Help} target="_blank">
          <p>{texts?.Help}</p>
        </a>
      </div>
    </div>
  );
}

import "./defaultLinks.css";
import {links } from "../../../../Interfaces/links";

interface LinkTexts {
  Guide: string;
  AboutUs: string;
  Contact: string;
  Help: string;
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
  );
}

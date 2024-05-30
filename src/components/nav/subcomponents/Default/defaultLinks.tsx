import "./defaultLinks.css";
import { Links } from "../../../../Interfaces/links";
export default function DefaultLinks({ links }: Links) {
  return (
    <>
      <div className="link">
        <a href={links?.Guia} target="_blank">
          <p>Guia</p>
        </a>
      </div>{" "}
      <div className="link">
        <a href={links?.aboutUs} target="_blank">
          <p>Quem Somos</p>
        </a>
      </div>
      <div className="link">
        <a href={`mailto:${links?.Contact}`}>
          <p>Contato</p>
        </a>
      </div>
      <div className="link">
        <a href={links?.Help} target="_blank">
          <p>Como ajudar</p>
        </a>
      </div>
    </>
  );
}

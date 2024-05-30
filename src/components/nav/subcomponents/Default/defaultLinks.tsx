import "./defaultLinks.css";
interface links {
  Logo?: string;
  Guia?: string;
  aboutUs?: string;
  Contact?: string;
  Help?: string;
  Btn?: string;
  Instagram?: string;
  mail?: string;
}
interface DefaultLinks {
  links?: links;
}
export default function DefaultLinks({ links }: DefaultLinks) {
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
        <a href={links?.Contact} target="_blank">
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

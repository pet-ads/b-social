import "./HeaderStyle.css";

interface HeaderType {
  text: string;
}

export default function Header({ text }: HeaderType) {
  return (
    <div className="conteiner">
      <h1 className="header">{text}</h1>
    </div>
  );
}

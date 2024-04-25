import "./HeaderStyle.css";

interface HeaderType {
  text: string;
}

export default function Header({ text }: HeaderType) {
  return <h1 className="header">{text}</h1>;
}

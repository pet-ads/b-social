import "./cardArea.css";
import Card from "./subcomponents/Card";
export default function CardArea() {
  return (
    <div className="cardArea">
      <div className="CardRow">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

import "./dropdown.css";

export default function Dropdown() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Sobre</a>
        </li>
        <li className="dropdown">
          <a href="">Serviços</a>

          <div className="dropdown-menu">
            <a href="">Serviço 1</a>
            <a href="">Serviço 2</a>
            <a href="">Serviço 3</a>
          </div>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

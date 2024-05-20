import "./mobileNav.css";
import { BiMenu } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";

interface mobileNav {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ clicked, setClicked }: mobileNav) {
  return (
    <div className="menu-icon">
      {!clicked ? (
        <BiMenu
          className="not-clicked"
          onClick={() => { setClicked(true);}}
        />
      ) : (
        <BiMenuAltRight
          className="clicked"
          onClick={() => {setClicked(false); }}
        />
      )}
    </div>
  );
}

import { useState } from "react";
import "./mobileNav.css";
import { BiMenu } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";

export default function MobileNav() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="MenuIcon">
      {!clicked ? (
        <BiMenu
          className="notClicked"
          onClick={() => {
            setClicked(true);
          }}
        />
      ) : (
        <BiMenuAltRight
          className="clicked"
          onClick={() => {
            setClicked(false);
          }}
        />
      )}
    </div>
  );
}

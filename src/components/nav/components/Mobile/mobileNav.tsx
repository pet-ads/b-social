// External Libraries
import { BiMenu } from "react-icons/bi"
import { BiMenuAltRight } from "react-icons/bi"

// Styles
import "./mobileNav.css"

interface Props {
  clicked: boolean
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileNav({ clicked, setClicked }: Props) {
  // Functions 
  function onMenuIconClick(){ 
    setClicked(!clicked)
  }
 
  return (
    <div className="menu-icon">
      {!clicked ? (
        <BiMenu
          className="not-clicked"
          onClick={onMenuIconClick}
        />
      ) : (
        <BiMenuAltRight
          className="clicked"
          onClick={onMenuIconClick}
        />
      )}
    </div>
  );
}

// External Libraries
import { useEffect, useState } from "react";

export default function useWindowWidth() {
  // Constants
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  // Effects
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
}

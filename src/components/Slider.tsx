import "./Slider.css";
import { PanInfo, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface iSliderProps {
  children: React.ReactNode;
  data: string[];
}

export default function Slider({ children, data }: iSliderProps) {
  const [currentX, setCurrentX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    function updateSize() {
      if (carousel.current) {
        setItemWidth(carousel.current.offsetWidth);
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const direction = offset > 0 ? -1 : 1;
    const threshold = 50;
    const newIndex = activeIndex + (Math.abs(offset) > threshold ? direction : 0);
    if (newIndex >= 0 && newIndex < data.length) {
      setActiveIndex(newIndex);
      setCurrentX(-newIndex * itemWidth);
    }
  };

  return (
    <motion.div className="slider">
      <motion.div className="carousel" ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ left: -itemWidth * (data.length - 1), right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ x: currentX }}
          animate={{ x: currentX }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

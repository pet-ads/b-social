import { useState, useRef, useEffect } from "react";
import { PanInfo } from "framer-motion";

interface UseSliderProps {
  itemCount: number;
}

function useSlider({ itemCount }: UseSliderProps) {
  const [currentX, setCurrentX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (carousel.current) {
        setItemWidth(carousel.current.offsetWidth);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!carousel.current) return;

    const offset = info.offset.x;
    const direction = offset > 0 ? -1 : 1;
    const threshold = 50;
    const newIndex = activeIndex + (Math.abs(offset) > threshold ? direction : 0);
    if (newIndex >= 0 && newIndex < itemCount) {
      setActiveIndex(newIndex);
      setCurrentX(-newIndex * itemWidth);
    }
  };

  return { currentX, activeIndex, carousel, handleDragEnd };
}

export default useSlider;

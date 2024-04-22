import "./Slider.css";
import { motion } from "framer-motion";
import useSlider from "../hooks/useSlider"; // Ensure the path is correct

interface iSliderProps {
  children: React.ReactNode;
  data: string[];
}

export default function Slider({ children, data }: iSliderProps) {
  const { currentX, carousel, handleDragEnd } = useSlider({ itemCount: data.length });

  // Calculate drag constraints dynamically and safely
  const getDragConstraints = () => {
    if (carousel.current) {
      const maxOffset = -(carousel.current.offsetWidth * (data.length - 1));
      return { left: maxOffset, right: 0 };
    }
    return { left: 0, right: 0 }; // Default constraints if ref is not attached
  };

  return (
    <motion.div className="slider">
      <motion.div className="carousel" ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={getDragConstraints()}
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

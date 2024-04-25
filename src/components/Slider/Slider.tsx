import "./Slider.css";
import { motion } from "framer-motion";
import useSlider from "../../hooks/useSlider";
import { TagType } from "../Card/subComponent/TagTypeInterface";
import { useDragConstraints } from "../../hooks/useDragConstraints";

interface Data {
  text: string;
  image: string;
  title: string;
  tag: TagType;
}

interface iSliderProps {
  children: React.ReactNode;
  data: Data[];
}

export default function Slider({ children, data }: iSliderProps) {
  const { currentX, carousel, handleDragEnd } = useSlider({ itemCount: data.length });
  const getDragConstraints = useDragConstraints({ carousel, itemCount: data.length });

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

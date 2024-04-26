/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

const SliderContext = createContext({
  goToSlide: (index: number) => {
    index;
  },
});

export const useSliderContext = () => useContext(SliderContext);
export default SliderContext;

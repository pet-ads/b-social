import { RefObject } from "react";

interface UseDragConstraintsProps {
  carousel: RefObject<HTMLDivElement>;
  itemCount: number;
}

export function useDragConstraints({ carousel, itemCount }: UseDragConstraintsProps) {
  const getDragConstraints = () => {
    if (carousel.current) {
      const maxOffset = -(carousel.current.offsetWidth * (itemCount - 1));
      return { left: maxOffset, right: 0 };
    }
    return { left: 0, right: 0 };
  };

  return getDragConstraints;
}

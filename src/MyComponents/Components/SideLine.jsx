import React, { useRef } from "react";
import useOnScreen from "../../helpers/onScreen";

const SideLine = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <span
      ref={ref}
      className={`h-auto min-w-8 w-8-px max-w-8 bg-red-1 mr-7 ${
        isVisible
          ? "transition ease-out delay-300 duration-500 transform origin-top scale-100"
          : "transition ease-out delay-750 duration-500 transform origin-top scale-0"
      }  motion-safe:animate-scaleIn`}
    ></span>
  );
};

export default SideLine;

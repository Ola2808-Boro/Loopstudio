import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size/throttled";

const useWindowDimensions = () => {
  const [width, height] = useWindowSize();
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();

  return { width: width, height: height };
};

export default useWindowDimensions;

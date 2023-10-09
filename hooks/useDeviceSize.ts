import { useEffect, useState } from "react";

export const useDeviceSize = () => {
  const [size, setSize] = useState<number>();

  const setScreenSize = () => setSize(document.body.clientHeight);

  useEffect(() => {
    setScreenSize();
    addEventListener("resize", setScreenSize);
    return () => {
      removeEventListener("click", setScreenSize);
    };
  }, []);

  return {
    size: `${size}px`,
  };
};

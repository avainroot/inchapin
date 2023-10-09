import { useEffect, useState } from "react";

export const useDeviceSize = () => {
  const [size, setSize] = useState<number | null>(null);

  const setScreenSize = () => setSize(document.body.clientHeight);

  useEffect(() => {
    setScreenSize();
    addEventListener("resize", setScreenSize);
    return () => {
      removeEventListener("resize", setScreenSize);
    };
  }, []);

  return {
    size,
  };
};

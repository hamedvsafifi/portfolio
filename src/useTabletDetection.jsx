import { useState, useEffect } from "react";

const useTabletDetection = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") return;

    const userAgent = navigator.userAgent;
    const tabletDetected =
      /iPad/.test(userAgent) ||
      (/Android/.test(userAgent) && !/Mobile/.test(userAgent));

    setIsTablet(tabletDetected);
  }, []);

  return isTablet;
};

export default useTabletDetection;

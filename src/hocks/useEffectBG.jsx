import { useEffect } from "react";

export const useEffectGreen = () => {
  useEffect(() => {
    console.log("effect");
    document.body.style.backgroundColor = "lightGreen";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};

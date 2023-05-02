import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useEffectBG = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === "/" ? "lightGreen" : "Red";
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};

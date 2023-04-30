import { useCallback, useState } from "react";

export const useCounter = () => {
  const [cnt, setCnt] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (e) => {
      console.log(cnt);
      if (cnt < 10) {
        setCnt(function (prevInputCnt) {
          return prevInputCnt + 1;
        });
      }
    },
    [cnt]
  );
  const handleDisplay = useCallback((e) => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { cnt, isShow, handleClick, handleDisplay };
};

import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [cnt, setCnt] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCnt = useMemo(() => {
    return cnt * 2;
  }, [cnt]);

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

  return { cnt, doubleCnt, isShow, handleClick, handleDisplay };
};

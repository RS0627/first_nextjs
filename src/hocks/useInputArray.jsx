import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleTextChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("文字制限に引っかかりました");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(
    (e) => {
      setArray((prevArray) => {
        if (prevArray.some((item) => item === text)) {
          alert("同じ要素があるため追加できません");
          return prevArray;
        }
        return [...prevArray, text];
      });
    },
    [text]
  );

  return { text, array, handleTextChange, handleAdd };
};

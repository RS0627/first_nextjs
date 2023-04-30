import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [cnt, setCnt] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

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

  useEffect(() => {
    console.log("effect");
    document.body.style.backgroundColor = "lightGreen";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {isShow ? <h1>{cnt}</h1> : null}
      <button href="./about" onClick={handleClick}>
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleAdd}>追加</button>

      <ul>
        {array.map((item) => {
          return <li kye={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
    </div>
  );
}

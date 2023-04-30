import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [cnt, setCnt] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (e) => {
      console.log(cnt);
      if (cnt < 10) {
        setCnt(function (inputCnt) {
          return inputCnt + 1;
        });
      }
    },
    [cnt]
  );

  const handleTextChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("文字制限に引っかかりました");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleDisplay = useCallback((e) => {
    setIsShow((isShow) => !isShow);
  }, []);

  useEffect(() => {
    console.log("effect");
    document.body.style.backgroundColor = "lightGreen";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Header />
      {isShow ? <h1>{cnt}</h1> : null}
      <button href="./about" onClick={handleClick}>
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleTextChange} />

      <Main page="index" />
    </>
  );
}

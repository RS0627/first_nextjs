import Head from "next/head";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [cnt, setCnt] = useState(1);

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
      <h1>{cnt}</h1>
      <button href="./about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
    </>
  );
}

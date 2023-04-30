import Head from "next/head";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [cnt, setCnt] = useState(1);

  function handleClick(e) {
    e.preventDefault();
    setCnt(function (inputCnt) {
      return inputCnt + 1;
    });
  }

  useEffect(() => {
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

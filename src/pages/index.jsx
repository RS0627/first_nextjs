import Head from "next/head";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useEffect } from "react";

function handleClick(e) {
  console.log(e.target.href);
  e.preventDefault();
}

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "lightGreen";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Header />

      <a href="./about" onClick={handleClick}>
        ボタン
      </a>

      <Main page="index" />
    </>
  );
}

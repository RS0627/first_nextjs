import Head from "next/head";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Main page="about" />
    </>
  );
}

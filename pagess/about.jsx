import Head from "next/head";
import { Main } from "../src/components/Main";
import { Header } from "../src/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main page="about" />
    </>
  );
}

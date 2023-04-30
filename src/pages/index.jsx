import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCounter } from "@/src/hocks/useCounter";
import { useInputArray } from "@/src/hocks/useInputArray";
import { useEffectGreen } from "@/src/hocks/useEffectGreen";

export default function Home() {
  const { cnt, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleTextChange, handleAdd } = useInputArray();

  useEffectGreen();

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

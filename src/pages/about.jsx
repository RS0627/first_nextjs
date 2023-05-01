import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";

export default function About({
  doubleCnt,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleTextChange,
  handleAdd,
}) {
  return (
    <div className={styles.container}>
      <Header />
      {isShow ? <h1>{doubleCnt}</h1> : null}
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
      <Main page="about" />
    </div>
  );
}

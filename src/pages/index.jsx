import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Header />
      {props.isShow ? <h1>{props.cnt}</h1> : null}
      <button href="./about" onClick={props.handleClick}>
        ボタン
      </button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={props.text} onChange={props.handleTextChange} />
      <button onClick={props.handleAdd}>追加</button>

      <ul>
        {props.array.map((item) => {
          return <li kye={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
    </div>
  );
}

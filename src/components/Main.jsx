import { Inter } from "next/font/google";
import Image from "next/image";
import classes from "@/src/components/Main.module.css";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <>
      <main className={`${classes.main} ${inter.className}`}>
        <Headline page={props.page}>
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>

        <div className={classes.center}>
          <Image
            className={classes.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <Links />
      </main>
    </>
  );
}

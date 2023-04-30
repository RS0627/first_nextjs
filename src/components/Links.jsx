import classes from "@/src/components/Links.module.css";

export function Links({ items }) {
  return (
    <div className={classes.grid}>
      {items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={classes.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={classes.title}>
              {item.title}
              <span>-&gt;</span>
            </h2>
            <p className={classes.discription}>{item.discription}</p>
          </a>
        );
      })}
    </div>
  );
}

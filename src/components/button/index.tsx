import { Glitch } from "components/glitch";
import styles from "./styles.module.scss";
type ButtonProps = {
  type?: string;
  text: string;
  link: string;
  isBlack?: boolean;
};
export const Button = ({ type, text, link, isBlack }: ButtonProps) => {
  const withFrame = type === "frame";
  return (
    <div
      className={`${styles.wrap} ${!withFrame && styles.bordered} ${
        !withFrame && styles.transparent
      } ${isBlack && styles.black}`}
    >
      <div
        className={styles.button}
        onClick={() => {
          window.open(link);
        }}
      >
        <div className={styles.glitch}>
          <Glitch text={text} glitch={true} inButton={true} />
        </div>
        <div className={styles.buttonText}>{text}</div>
      </div>
      {withFrame ? (
        <>
          <div className={styles.LT}>
            <div className={styles.vertical} />
            <div className={styles.diagonal} />
            <div className={styles.horizontal} />
          </div>
          <div className={styles.LB}>
            <div className={styles.vertical} />
            <div className={styles.horizontal} />
          </div>
          <div className={styles.RT}>
            <div className={styles.vertical} />
            <div className={styles.horizontal} />
          </div>
          <div className={styles.RB}>
            <div className={styles.vertical} />
            <div className={styles.horizontal} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.LT}>
            <div className={styles.vertical} />
            <div className={styles.diagonal} />
            <div className={styles.horizontal} />
          </div>
          <div className={styles.LB}>
            <div className={styles.vertical} />
            <div className={styles.horizontal} />
          </div>
          <div className={styles.RT}>
            <div className={styles.vertical} />
            <div className={styles.horizontal} />
          </div>
          <div className={styles.RB}>
            <div className={styles.vertical} />
            <div className={styles.horizontal} />
          </div>
          <div className={styles.L} />
          <div className={styles.R} />
        </>
      )}
    </div>
  );
};

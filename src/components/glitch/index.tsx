import styles from './styles.module.scss';
export const Glitch = ({
  text,
  glitch,
  type,
  isWhite,
  inButton,
}: {
  text: string;
  glitch: boolean;
  type?: number;
  isWhite?: boolean;
  inButton?: boolean;
}) => {
  const glitchStyles = type === 1 ? styles.glitch1 : styles.glitch;
  return (
    <div
      className={`${!inButton && styles.text} ${isWhite && styles.white} ${
        glitch && glitchStyles
      }`}
    >
      {glitch && <span>{text}</span>}
      {text}
      {glitch && <span>{text}</span>}
    </div>
  );
};

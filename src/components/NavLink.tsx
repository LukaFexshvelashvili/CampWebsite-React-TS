import styles from "./Navbar.module.css";

export default function Navbar(props: { active: number; title: string }) {
  return (
    <div
      className={`${styles.navButton}  ${
        props.active ? styles.navButtonActive : ""
      }`}
    >
      {props.title}
    </div>
  );
}

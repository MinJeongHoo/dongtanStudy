import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <span className={styles.title}>#TODO LIST</span>
      <div className={styles.headerBtnsDiv}>
        <button className={styles.btn}>All</button>
        <button className={styles.btn}>Active</button>
        <button className={styles.btn}>Completed</button>
      </div>
    </div>
  );
};

export default Header;

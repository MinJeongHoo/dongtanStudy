import React from "react";
import styles from "./header.module.css";
import { btnState } from "../../atom";
import { useSetRecoilState } from "recoil";

const Header = () => {
  const setBtn = useSetRecoilState(btnState);
  const checkBtn = (e) => {
    setBtn(e.target.name);
  };
  return (
    <div className={styles.headerDiv}>
      <span className={styles.title}>#TODO LIST</span>
      <div className={styles.headerBtnsDiv}>
        <button className={styles.btn} name="all" onClick={checkBtn}>
          All
        </button>
        <button className={styles.btn} name="active" onClick={checkBtn}>
          Active
        </button>
        <button className={styles.btn} name="completed" onClick={checkBtn}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Input } from "reactstrap";
import styles from "./todoItem.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { itemState } from "../../atom";

const TodoItem = ({ data }) => {
  const setItems = useSetRecoilState(itemState);

  const changeDone = (e) => {
    setItems((items) =>
      items.map((item) =>
        item.id === parseInt(e.target.id)
          ? { ...item, done: !item.done }
          : { ...item, done: item.done }
      )
    );
  };
  return (
    <div className={styles.itemDiv}>
      <Input
        type="checkbox"
        id={data.id}
        onClick={changeDone}
        checked={data.done}
      />
      <span
        style={
          data.done
            ? { textDecorationLine: "line-through" }
            : { textDecorationLine: "none" }
        }
        className={styles.itemName}
      >
        {data.name}
      </span>
    </div>
  );
};

export default TodoItem;

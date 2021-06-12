import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { itemState } from "../../atom";
import TodoItem from "../todoItem/todoItem";
import { Button } from "reactstrap";
import styles from "./completedPage.module.css";

const CompletedPage = () => {
  const todoList = useRecoilValue(itemState);
  const setList = useSetRecoilState(itemState);

  const deleteAll = () => {
    setList(todoList.filter((item) => item.done !== true));
  };

  const selectedItemDelete = (e, id) => {
    e.preventDefault();
    setList(todoList.filter((item) => item.id !== id));
  };
  return (
    <div className={styles.completedDiv}>
      {todoList.map(
        (item) =>
          !item.done || (
            <div className={styles.div}>
              <TodoItem key={item.id} data={item} />
              <Button onClick={(e) => selectedItemDelete(e, item.id)}>
                삭제
              </Button>
            </div>
          )
      )}
      <Button className={styles.btn} onClick={deleteAll}>
        전체삭제
      </Button>
    </div>
  );
};

export default CompletedPage;

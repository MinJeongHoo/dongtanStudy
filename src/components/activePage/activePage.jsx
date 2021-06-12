import React from "react";
import { useRecoilValue } from "recoil";
import { itemState } from "../../atom";
import AddSection from "../addSection/addSection";
import TodoItem from "../todoItem/todoItem";

const ActivePage = () => {
  const todoList = useRecoilValue(itemState);

  return (
    <div>
      <AddSection />
      {todoList.map(
        (item) => item.done || <TodoItem key={item.id} data={item} />
      )}
    </div>
  );
};

export default ActivePage;

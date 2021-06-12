import React from "react";
import { useRecoilValue } from "recoil";
import AddSection from "../addSection/addSection";
import { itemState } from "../../atom";
import TodoItem from "../todoItem/todoItem";

const AllPage = () => {
  const todoList = useRecoilValue(itemState);

  return (
    <div>
      <AddSection />
      {todoList.map((item) => (
        <TodoItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default AllPage;

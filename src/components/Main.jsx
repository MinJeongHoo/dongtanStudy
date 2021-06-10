import React, { useState,useCallback}from 'react';
import Top from './Top';
import { Route } from 'react-router-dom';
import uuid from 'react-uuid';
import All from './All';
import Active from './Active';
import Complete from './Complete';

const Main = () => {
  
  const [taskList, setTaskList] = useState([]);
  
  const saveTask = useCallback((value) => {
    setTaskList([...taskList,{id:uuid(), task: value, complete: false }])
  }, [taskList]);
  
  /**
   * param bool(checked)
   * param string(id)
   */
  const changeTask = useCallback((checked, id) => {
    const newTaskList = taskList.map((data) => {
      if (data.id === id) {
        return {...data,  complete: checked }
      }
      return {...data};
    });
    setTaskList(newTaskList);
  }, [taskList]);

  /**
   * 삭제
  */

  const deleteTask = useCallback((id) => {
    const newTaskList = taskList.filter((data) => {
      return data.id !== id;
    });
    setTaskList(newTaskList);
  },[taskList]);
  return (
    <>
      <Top saveTask={saveTask}/>
      <Route exact path='/' render={() => <All taskList={taskList} changeTask={changeTask}/>}/>
      <Route path='/active' render={() => <Active taskList={taskList} changeTask={changeTask}/>}/>
      <Route path='/complete' render={() => <Complete taskList={taskList} changeTask={changeTask} deleteTask={ deleteTask}/>}/>
    </>
  )
};

export default Main;
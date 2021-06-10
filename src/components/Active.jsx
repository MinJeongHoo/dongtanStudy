import React,{useRef} from 'react';

const Active = ({ taskList,changeTask }) => {
  const checkBox = useRef();
  const style = {
    'textDecoration':'line-through'
  }
 const onChange = (event) => {
    const id = event.target.parentNode.id;
    const checked = event.target.checked;
    changeTask(checked,id);
  }
  return (
    <ul>
      {taskList.map(({id,task,complete }) =>
        !complete&&
        <li key={id} id={id}>
          <input type="checkbox" ref={checkBox} onChange={onChange}/>
          <span style={complete?style:{}}>{task}</span>
        </li>
      )}
    </ul>
  )
};

export default Active;
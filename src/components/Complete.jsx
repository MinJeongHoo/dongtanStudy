import React,{useRef} from 'react';

const Complete = ({taskList,changeTask,deleteTask}) => {
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
      {taskList.map(({ id,task, complete }) =>
        complete&&
        <li key={id} id={id}>
          <input type="checkbox" ref={checkBox} onChange={onChange}  defaultChecked={complete} />
          <span style={complete?style:{}}>{task}</span>
          <button type="button" onClick={()=>deleteTask(id)}>Delete</button>
        </li>
      )}
    </ul>
  )
};

export default Complete;
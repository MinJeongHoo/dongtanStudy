import React,{useRef} from 'react';

const All = ({taskList,changeTask}) => {
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
        <li key={id} id={id}>
          <input type="checkbox" ref={checkBox} onChange={onChange} defaultChecked={complete}/>
          <span style={complete?style:{}}>{task}</span>
        </li>
      )}
    </ul>
  )
};

export default All;
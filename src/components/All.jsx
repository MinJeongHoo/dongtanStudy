import React,{useRef} from 'react';

const All = ({taskList,changeTask}) => {
  const checkBox = useRef();
  const currentLi = useRef();
  const style = {
    'textDecoration':'line-through'
  }
  const onChange = (event) => {
    changeTask(event.target.checked,currentLi.current.id);
  }
  return (
    <ul>
      {taskList.map(({task,complete },idx) =>
        <li key={idx} id={idx} ref={currentLi}>
          <input type="checkbox" ref={checkBox} onChange={onChange} value={ complete}/>
          <span style={complete?style:{}}>{task}</span>
        </li>
      )}
    </ul>
  )
};

export default All;
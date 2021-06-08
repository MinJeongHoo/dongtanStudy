import React, {useRef}from 'react';
import { Link } from 'react-router-dom';
  const Top = React.memo(({saveTask}) => {
  const inputValue = useRef();
  const onClick = () => {
    saveTask(inputValue.current.value);
  }
  return (
    <section>
    <h1>#todo</h1>
      <nav>
        <ul>
          <li><Link to='/'>All</Link></li>
          <li><Link to='/active'>Active</Link></li>
          <li><Link to='/complete'>Completed</Link></li>
        </ul>
      </nav>
      <form>
        <input type='text' placeholder='add details' ref={inputValue}></input>
        <button type='button' onClick={onClick}>Add</button>
      </form>
    </section>
  )
});

export default Top;
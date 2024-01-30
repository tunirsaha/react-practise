import './App.css';
import { useState } from 'react'
import Input from './Input'
// import Btn from './Btn'

const App = () => {

  const [item, setItem] = useState('');
  // const [list, setList] = useState([]);

  return (
    <div className="text-center">
      <h1>To Do List</h1>
      <h3>{item}</h3>
      <Input parentCb={(el) => setItem(el)}></Input>
      {/* <Btn parentCb={(ev) => updateArr(ev)}></Btn> */}
    </div>
  );
}

// const updateArr = (ev) => {
//   this.setList({ ...this.list, item })
//   this.setItem('')
// }

export default App;

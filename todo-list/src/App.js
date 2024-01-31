import { useState } from 'react'
import Input from './Input'
import Btn from './Btn'
import List from './List'

const App = () => {

  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [ctr, incrementCtr] = useState(1);

  const addItem = () => {
    incrementCtr(ctr + 1)
    setList([...list, { id: ctr, item: item, status: true }])
  }

  const updateArr = (index, event) => {
    console.log(`${event} called`, list)
    list.forEach((el) => {
      if (el.id === index) {
        el.status = !el.status
      }
    })
    setList([...list])
  }

  return (
    <div style={{ width: 500 }} className="p-5 m-5 mx-auto rounded border text-center bg-light">
      <h1 className="mb-5">To Do List</h1>
      <div className="d-flex justify-content-between align-items-center">
        <Input parentCb={(el) => setItem(el)}></Input>
        <Btn parentCb={() => addItem()}></Btn>
      </div>
      <List type={'To Be Done'} deleteOrReset={(idx) => updateArr(idx)} list={list.filter((item) => { return item.status })}></List>
      <List type={'Completed'} deleteOrReset={(idx) => updateArr(idx)} list={list.filter((item) => { return !item.status })}></List>
    </div>
  );

}

export default App;

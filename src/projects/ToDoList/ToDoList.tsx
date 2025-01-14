import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Btn from './components/Btn'
import Input from './components/Input'
import List from './components/List'
import { Item } from './models/item.model'

const ToDoList = () => {

  const [item, setItem] = useState<string>('');
  const [list, setList] = useState<Item[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitClick = () => {
    setList([...list, { id: uuidv4(), name: item, status: true }])
    setItem('')
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  const handleInputValue = (e: string) => setItem(e)

  const updateArr = (index: string) => {
    list.forEach((el: Item) => {
      if (el.id === index) {
        el.status = !el.status
      }
    })
    setList([...list])
  }

  return (
    <div className="position-relative">
      <h3>To Do List</h3>
      <p>Pretty self explanatory</p>
      <div className="d-flex align-items-center">
        <Input ref={inputRef} inputValue={handleInputValue}></Input>
        <Btn submitBtnClicked={handleSubmitClick}></Btn>
      </div>
      <List type={'To Be Done'} deleteOrReset={(idx) => updateArr(idx)} list={list.filter((item) => { return item.status })}></List>
      <List type={'Completed'} deleteOrReset={(idx) => updateArr(idx)} list={list.filter((item) => { return !item.status })}></List>
    </div >
  );

}

export default ToDoList;

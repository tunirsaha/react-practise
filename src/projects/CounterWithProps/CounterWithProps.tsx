import { useState } from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import Counter from './components/Counter'

const CounterWithProps = () => {

  const [count, updateCount] = useState(0);
  const handleIncrement = () => {
    updateCount(count + 1)
  }
  const handleDecrement = () => {
    updateCount(count > 0 ? (count - 1) : count)
  }

  return (
    <div className="position-relative">
      <h3>A Button Counter</h3>
      <p>Pretty self explanatory</p>
      <Increment increment={handleIncrement}></Increment>
      <Counter count={count}></Counter>
      <Decrement count={count} decrement={handleDecrement}></Decrement>
    </div>
  )
}

export default CounterWithProps;
import { useState } from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import Counter from './components/Counter'

const CounterWithProps = () => {

  const [count, updateCount] = useState(0);
  const handleIncrement = () => {
    updateCount((prev) => prev + 1)
  }
  const handleDecrement = () => {
    updateCount((prev) => prev - 1)
  }

  return (
    <div className="d-flex align-items-center justify-content-around" style={{ height: '100vh', width: '100vw' }}>
      <div>
        <Increment increment={handleIncrement}></Increment>
        <Counter count={count}></Counter>
        <Decrement decrement={handleDecrement}></Decrement>
      </div>
    </div>
  )
}

export default CounterWithProps;
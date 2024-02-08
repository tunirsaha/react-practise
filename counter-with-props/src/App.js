import { useState } from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Counter from './Counter'

const App = () => {

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

export default App;
import { useState } from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Counter from './Counter'

const App = () => {

  const [count, updateCount] = useState(0);
  const refreshCounter = (val) => {
    updateCount(count + val < 0 ? 0 : count + val)
  }

  return (
    <div className="d-flex align-items-center justify-content-around" style={{ height: '100vh', width: '100vw' }}>
      <div>
        <Increment updateCount={(val) => refreshCounter(val)}></Increment>
        <Counter count={count}></Counter>
        <Decrement updateCount={(val) => refreshCounter(val)}></Decrement>
      </div>
    </div>
  )
}

export default App;
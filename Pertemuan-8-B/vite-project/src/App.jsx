import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Greeting from './Greeting'

function App() {
  
  // State
  const [count, setCount] = useState(0)

  // setCount(5)

  return (
    <div>
      <h1>Main App</h1>
      <p>{count}</p>
      <button onClick={() => setCount(5)}>Klik jadi 5</button>

      <Greeting name="John" age="12"/>

      <Greeting name="David" age="15"/>

      <Greeting name="Budi" age="20"/>


    </div>
  )
}

export default App

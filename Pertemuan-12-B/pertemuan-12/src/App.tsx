import { useState } from 'react'
import './App.css'

import Greeting from './Greeting'

function App() {
  // const name:string = "John";
  // const age:number = 20;

  // return (
  //  <div>
  //   <h1>Hello {name}</h1>
  //   <h1>Age: {age}</h1>
  //  </div>
  // )

  // UseState

  // const [count, setCount] = useState<number>(0);

  // return (
  //   <div>

  //     <h1>{count}</h1>

  //     <button onClick={() => setCount(count + 1)}>Tambah</button>
  //   </div>
  // )


  // return (
  //   <div>
  //     <Greeting name="John Doe" />
  //   </div>
  // )

  // Array + Object

  interface User {
    id: number,
    name: string,
    age: number
  }

  const [user, setUser] = useState<User[]>([
    {id: 1, name: "John", age: 20},
    {id: 2, name: "Doe", age: 25},
    {id: 3, name: "Budi", age: 30}
  ]);

  return (
    <div>
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

interface User{
  id: number
  name: string
  username: string
  email: string
}

function App() {

  // Typescript + Fetch API

  // https://jsonplaceholder.typicode.com/users

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Logic dari fetch API nya...

    const fetchData = async () => {
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await res.json()
        setUsers(data)
      }
      catch(error){
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    }

    fetchData()

  }, [])

  return (
    <div>
      <h1>User List</h1>

      {loading ? (
        <p>Loading...</p>
      ): (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.username} - {user.email}</li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default App

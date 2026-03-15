import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from "axios"

function App() {

  // GET Request (Ambil data)

  // https://jsonplaceholder.typicode.com/posts

  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(response => {
  //     setPosts(response.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }, [])

  // return (
  //   <div>
  //     <h1>List Post</h1>
  //     {posts.slice(0,5).map(post => (
  //       <p>{post.title}</p>
  //     ))}
  //   </div>
  // )


  // POST Request (Tambah Data)

  // const addPost = () => {
  //   axios.post("https://jsonplaceholder.typicode.com/posts", {
  //     title: "Post Baru",
  //     body: "Ini deskripsi dari post barunya",
  //     userId: 1
  //   })
  //   .then(response => {
  //     console.log("Berhasil ditambah: ", response.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  // return (
  //   <div>
  //     <button onClick={addPost}>Tambah Post</button>
  //   </div>
  // )


  // PUT Request (Update Data)

  // const updatePost = () => {
  //   axios.put("https://jsonplaceholder.typicode.com/posts/1", {
  //     title: "Update Post",
  //     body: "Ini deskripsi dari post yang di update",
  //     userId: 1
  //   })
  //   .then(response => {
  //     console.log("Berhasil Update: ", response.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  // return (
  //   <div>
  //     <button onClick={updatePost}>Update Post</button>
  //   </div>
  // )

  // DELETE 

  const deletePost = () => {
    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
      console.log("Berhasil delete", response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "profile",
    element: <Profile/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

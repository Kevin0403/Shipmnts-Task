import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/upload/Form'
import { Outlet } from 'react-router-dom'
import { Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className=' mt-2'>

      <Outlet />
      </div>
    </>
  )
}

export default App

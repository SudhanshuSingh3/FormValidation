import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './form'
import Signup from './signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Signup/>
    </div>
  )
}

export default App

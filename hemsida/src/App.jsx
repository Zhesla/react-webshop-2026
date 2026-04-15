import { useState, } from 'react'
import SearchUI from "./SearchUI"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Welcome to the App</h1>
        <SearchUI />
      </div>
    </>
  )
}

export default App

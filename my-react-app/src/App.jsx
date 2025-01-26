import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import churchPhoto from './assets/church.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
          <img src={churchPhoto} className="logo react" alt="React logo" />
        
      </div>
      <h1>Rising Sun Methodist Church</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Welcome, this site is still under construction and will be coming online soon
        </p>
      </div>
      
    </>
  )
}

export default App

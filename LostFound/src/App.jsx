import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Lost from './lost'
import Home from './Home'
import Found from './Found'
import Post from './Post'

function App() {
  const [count, setCount] = useState(0)

return (
  <div className='bg-slate-200 min-h-screen'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/lost" element={<Lost />} />
            <Route path="/found" element={<Found />} />
            <Route path="/post" element={<Post />} />

          </Routes>
        </Router>
    {/* <h1>fds</h1>
    <p className='text-red-700'>dasdas</p> */}
  </div>
  
)
}

export default App

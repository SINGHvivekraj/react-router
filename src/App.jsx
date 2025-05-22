import React from 'react'
import { Link, Routes ,Route} from 'react-router-dom'
import Nav from "./components/Nav"
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <>
    
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} >
        <Route path="/user/:id" element={<UserDetails />} />
      </Route>
    </Routes>
    </>

  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes ,useLocation} from 'react-router-dom';
// import User from "./component/User"
// import Home from "./component/Home"
const User = () => {
  console.log(useLocation());
  return <div>user</div>
}
const Home = () => {
  console.log(useLocation());
  return <div> home</div>
}
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element= {<Home/>}/>
        <Route exact path="/user" element = {<User/>}/>
      </Routes>
    </HashRouter>
      
  )
}

export default App

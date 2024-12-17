
import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Customers from './pages/Customers'
import Customers from './pages/Customers'
import Help from './pages/Help'
import Login from './pages/Login'

function App() {


  return (
   <Routes>
    {/* <Route path='/' element={<div>Hello</div>} /> */}
    <Route path='/' element={<Login />} />
    <Route path='/customers' element={<Customers />} />
    <Route path='/help' element={<Help />} />
    <Route path='/dashboard' element={<Help />} />
   </Routes>
  )
}

export default App

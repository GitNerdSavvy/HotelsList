import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes,Route } from 'react-router'
import Home from './Pages/Home'
import More from './Pages/More'
import London from './Pages/London'
import Mumbai from './Pages/Mumbai'
import Paris from './Pages/Paris'
import NewY from './Pages/NewYork'
import HotelDetails from './Pages/HotelDetails';
function App() {
  
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/more' element={<More/>}></Route>
    <Route path='/London' element={<London/>}></Route>
    <Route path='/Mumbai' element={<Mumbai/>}></Route>
    <Route path='/Paris' element={<Paris/>}></Route>
    <Route path='/NewY' element={<NewY/>}></Route>
    <Route path='/:hotelName' element={<HotelDetails/>}></Route>
   </Routes >
  )
}

export default App

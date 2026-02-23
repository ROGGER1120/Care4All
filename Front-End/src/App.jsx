import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NgoHome from "./pages/NgoHome"
import NgoDonations from "./pages/NgoDonations"
import NgoEvents from "./pages/NgoEvents"
import NgoProfile from "./pages/NgoProfile"
import ContactUs from "./pages/ContactUs"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/ngohome' element={<NgoHome/>}/>
      <Route path="/ngodonation" element={<NgoDonations/>}/>
      <Route path="/ngoevents" element={<NgoEvents/>}/>
      <Route path='/ngoprofile' element={<NgoProfile/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
  )
}

export default App
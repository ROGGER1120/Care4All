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
import DonorHome from "./pages/DonorHome"
import Needs from "./pages/Needs"
import DonationHistory from "./pages/DonationHistory"
import NgoDirectory from "./pages/NgoDirectory"
import DonorEvents from "./pages/DonorEvents"
import DonorProfile from "./pages/DonorProfile"
import AdminDashboard from "./pages/AdminDashboard"
import PendingVerification from "./pages/PendingVerification"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/ngohome' element={<NgoHome/>}/>
      <Route path="/ngodonation" element={<NgoDonations/>}/>
      <Route path="/ngoevents" element={<NgoEvents/>}/>
      <Route path='/ngoprofile' element={<NgoProfile/>}/>
      <Route path='/donor' element={<DonorHome/>}/>
      <Route path='/needs' element={<Needs/>}/>
      <Route path="/history" element={<DonationHistory/>}/>
      <Route path="/ngodirectory" element={<NgoDirectory/>}/>
      <Route path="/donorevents" element={<DonorEvents/>}/>
      <Route path="/donorprofile" element={<DonorProfile/>}/>
      <Route path="/admindashboard" element={<AdminDashboard/>}/>
      <Route path="/pending" element={<PendingVerification/>}/>
    </Routes>
  )
}

export default App
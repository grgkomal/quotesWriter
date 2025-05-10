
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Route, Routes } from "react-router"
import Home from "./components/Home"
import LoginForm from "./components/LoginForm"
// import Navbar from './components/Navbar'
import Profile from "./components/Profile"
import RegistrationForm from "./components/RegistrationForm"

import { ToastContainer } from "react-toastify"
import QuoteList from "./components/QuoteList"
import QuoteForm from "./components/QuoteForm"
import Favorites from "./components/Favorites";
import DisplayAllQuotes from "./components/DisplayAllQuotes";

function App() {
  
  return (
    <div>
      <Routes className="container">
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/myquotes" element={<QuoteList/>}/>
        <Route path="/newquote" element={<QuoteForm/>}/>
        <Route path="/all" element={<DisplayAllQuotes/>}/>
        <Route path="/favorite" element={<Favorites/>}/>
      </Routes>
      
     {/* <LoginForm/> */}
     {/* <RegistrationForm/> */}
     {/* <Home/> */}
     {/* <Navbar/> */}
     {/* <Profile/> */}
     {/* <QuoteList/> */}
     {/* <QuoteForm/> */}
     <ToastContainer/>
    </div>
  )
}

export default App

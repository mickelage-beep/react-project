import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar";
import {Home} from "./pages/Home";         
import {Rooms} from "./pages/Rooms";
import {Restaurant} from "./pages/Restaurant";
import {Contact} from "./pages/Contact";
import {Booking} from "./pages/Booking";
import "./App.css";

function App() {
  return (

      <Router>
      <div>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        <Footer/>
      </div>


    </Router>
   
  );





}
export default App 
import Nav from "./components/Navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home.js";
const toursData = require("./data/db.json");
import TourDetails from "./components/TourDetails.js";
function App() {
  return (
    <>
      <Nav />
      
       <Routes>
        <Route path="/" element={<Home data={toursData}/>} />
      <Route path="/tour/:id" element= {< TourDetails /> } />
      </Routes> 
    </>
  );
}

export default App;

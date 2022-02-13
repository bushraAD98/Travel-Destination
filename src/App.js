import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home.js";
const toursData = require("./data/db.json");

function App() {
  return (

    <Home data={toursData}/>
    
  )
}

export default App;

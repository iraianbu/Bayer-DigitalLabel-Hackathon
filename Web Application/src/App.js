import logo from './logo.svg';
import './index.css';
import Navbar from "./Components/Navbar"
import Dashboard from './Components/Dashboard';
import Store from './Components/Store';
import Main from './Components/Main';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;

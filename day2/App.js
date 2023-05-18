// import './App.css';
import {Link} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage} from "./Homepage";
import {Apple} from "./Apple";
import { NotFound } from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/apple">Apple</Link>
      </div>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/apple" element={<Apple/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

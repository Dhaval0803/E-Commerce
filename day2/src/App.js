import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { HomePage } from "./HomePage";
import { Apple } from "./Apple";
import { NotFound } from "./NotFound";

const App = () => (
  <BrowserRouter>
    <div>
      <Link
        to="/"
        style={{
          marginLeft: 5,
        }}
      >
        Home
      </Link>
      <Link
        to="/apple"
        style={{
          marginLeft: 10,
        }}
      >
        Apple
      </Link>
      <Link
        to="/applet"
        style={{
          marginLeft: 10,
        }}>Applet</Link>
    </div>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/apple" element={<Apple />}></Route>
      <Route path="/applet" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
export default App;

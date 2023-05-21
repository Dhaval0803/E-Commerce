import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { gloabalstyles } from './constants';
import appstyle from "./Appstyle.module.css"
import { HomePage } from "./HomePage";
import { Apple } from "./Apple";
import { NotFound } from "./NotFound";
import Logo from "./images/logo.svg"
import { theme } from './styles';
import { ThemeProvider } from '@mui/material';
import sitelogo from "./images/logo192.png" 
const App = () => (
    <><ThemeProvider theme={theme}>
    <img src={sitelogo} alt="App Logo "/>
    <BrowserRouter>
    <div className={appstyle.navbarstyle}>
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
  </ThemeProvider>
  </>
);

export default App;

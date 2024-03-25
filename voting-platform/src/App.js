import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Casting from './components/Casting';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
      <Route path='/casting' element={<Casting/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

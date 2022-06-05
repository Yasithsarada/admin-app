import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/Signin' element={<Signin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

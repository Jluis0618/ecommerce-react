import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './components/Login';
import Register from "./components/Register";
import AdminPanel from "./components/AdminPanel"


function App() {
  return (
 <BrowserRouter>
   <NavBar />
   <Routes>
     <Route path="/cart" ></Route>
   </Routes>
   <AdminPanel />
 </BrowserRouter>

 

//<BrowserRouter>
//  <Login />
//  <Routes>
//    {/* <Route path="/"/> */}
//    <Route exact path="/Register" element={<Register />}/>
//  </Routes>
//</BrowserRouter>
 

  );
}

export default App;

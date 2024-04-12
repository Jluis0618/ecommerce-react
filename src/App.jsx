import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart"
import Contact from "./pages/Contact";
import { Products } from "./pages/Products";
import { HomePage } from "./HomePage";
import { Footer } from "./components/Footer";
import Register from './components/Register'
import Login from './components/Login'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

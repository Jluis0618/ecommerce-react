import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/cart" ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Product Listing component</h1>} />
          <Route path="/add" element={<h1>Add Product Component</h1>} />
          <Route path="/update" element={<h1>Update Product Component</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<h1>Profile Component </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

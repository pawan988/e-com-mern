import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer";
import SignUp from "./auth/SignUp";
import PrivateComponent from "./component/PrivateComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product Listing component</h1>} />
            <Route path="/add" element={<h1>Add Product Component</h1>} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/logout" element={<h1>Logout</h1>} />
            <Route path="/profile" element={<h1>Profile Component </h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

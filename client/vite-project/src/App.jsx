import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Slider from "./Layout/Slider";
import Navbar from "./Layout/Navbar";
import Homepage from "./Pages/Homepage";

function App() {


  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/user" element={<User />} />
      </Routes> */}
      <Navbar/>
      <Homepage/>

    </>
  );
}

export default App;

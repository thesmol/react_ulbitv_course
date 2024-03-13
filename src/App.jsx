// import Button from '@mui/material/Button';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/UI/navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

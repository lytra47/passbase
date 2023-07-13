import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Saved from "./Components/User/Saved";
import Home from "./Components/User/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

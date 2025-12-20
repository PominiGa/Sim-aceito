import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Login from "./login/login";
import Register from "./register/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Login from "./login/login";
import Register from "./register/register";
import GiftIdeas from "./presents/GiftsIdeas";
import GiftsEditor from "./presents/gifts/GiftsEditor";
import ProtectedRoute from "./auth/ProtectedRoute";
import Agend from "./agend/agend";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lista-de-presentes" element={<GiftIdeas />} />
      <Route path="/lista-de-presentes" element={<GiftIdeas />} />
      <Route path="/agenda" element={<Agend />} />
      <Route
        path="/minha-lista"
        element={
          <ProtectedRoute>
            <GiftsEditor />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

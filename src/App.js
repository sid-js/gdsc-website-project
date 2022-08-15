import { Routes, Route, Link } from "react-router-dom";
import {
  Home,
  Login,
  Navbar,
  Teams,
  Footer,
  Community,
} from "./Components/index";
import { AuthContextProvider } from "./Auth/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Main
function App() {
  return (
    <>
        <ToastContainer
        position="top-center"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
        

    </>
  );
}

export default App;

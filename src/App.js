import {Routes,Route,Link} from "react-router-dom";
import {Home,Login,Navbar,Teams} from "./Components/index";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teams" element={<Teams/>}/>
      <Route path="/auth/login" element={<Login/>}/>
    </Routes>
    </>
    
  );
}

export default App;

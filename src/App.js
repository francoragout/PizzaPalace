import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";

import Info from "./pages/Info";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Reserve from "./pages/Reserve";


function App() {
  return (
    <Router>
      <Header />
      
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/info" element={<Info />} />

        









        

      </Routes>

    </Router>



  );
  
}

export default App;
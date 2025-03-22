import { Button } from "@mui/material";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}/>
    </Routes>
  );
}

export default App;

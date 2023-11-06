
import Stopwatch from "./Stopwatch";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./NavPage";


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/stopwatch" element={<Stopwatch />} ></Route>
      </Routes>
    </>
  );
}

export default App;


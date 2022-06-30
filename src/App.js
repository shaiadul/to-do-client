import Header from './Pages/Header/Header'
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/Pages/Home/Home"

function App() {
  return (
    <div className="">
      <Header/>
      {/* routes */}
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

import Header from './Pages/Header/Header'
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/Pages/Home/Home"
import Todo from './Pages/ToDo/Todo';
import UpdateList from './Pages/ToDo/UpdateList';

function App() {
  return (
    <div className="">
      <Header/>
      {/* routes */}
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="todo" element={<Todo/>} />
          <Route path="/update/:id" element={<UpdateList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

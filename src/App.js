import Header from './Pages/Header/Header'
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/Pages/Home/Home"
import Todo from './Pages/ToDo/Todo';
import UpdateList from './Pages/ToDo/UpdateList';
import Footer from './Pages/Footer/Footer';
import Calendar from './Pages/Calendar/Calendar';
import { useState } from 'react';
import Complete from './Pages/Complete/Complete';

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="">
      <Header/>
      {/* routes */}
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home date={date}/>} />
          <Route path="todo" element={<Todo/>} />
          <Route path="completed" element={<Complete/>} />
          <Route path="/update/:id" element={<UpdateList/>}></Route>
          <Route path="calendar" element={<Calendar date={date} setDate={setDate}/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

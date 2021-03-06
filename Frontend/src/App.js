import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useNavigate } from 'react-router-dom';

import Notes from "./Components/Notes/Notes";
import Todo from "./Components/Todo/Todo";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import {useState } from "react";
import Register from "./Components/Signup/Register";

import { SidebarData } from '../src/Components/Sidebar/Sidebardata'
import { SidebarData2 } from '../src/Components/Sidebar/Sidebardata2'

function App() {
  const [user,setUser] = useState(false);
 
  return (
    <div className="App">

      {
        user ?
        <>
        <Sidebar setUser={user} SidebarData={SidebarData} />
        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/profile" element={<Profile setUser={setUser} />} />
        </Routes>
          </> 
         :
         <>
         <Sidebar setUser={user} SidebarData={SidebarData2} />
         <Routes>
         <Route path="/" element={<Login user={user} setUser={setUser} />} />
         <Route path="/register" element={<Register setUser={setUser} />} />
        </Routes>
        </>
      }
      
         
      
      
    </div>
  );
}

export default App;

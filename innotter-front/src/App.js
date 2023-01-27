import React, { useState, useMemo } from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import Register from "./components/Register";
import Users from "./components/Users";
import Pages from "./components/Pages";
import Tags from "./components/Tags";
import UserAcc from "./components/UserAcc";
import UserPage from "./components/UserPage";
import { UserContext } from "./components/UserContext";

function App() {
  const[user, setUser] = useState(null)

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={providerValue}>
          <Routes>
              <Route path="/Innotter" element={<Homepage />} />
              <Route path="/sign" element={<Signin />} />
              <Route path="/register" element={<Register />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/pages" element={<Pages />}></Route>
              <Route path="/tags" element={<Tags />}></Route>
              <Route path="/user-account" element={<UserAcc />}></Route>
              <Route path="/user-page" element={<UserPage />}></Route>
          </Routes>
          </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

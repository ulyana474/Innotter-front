import React, { useState, useMemo, useEffect } from "react";
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
import CreateTag from "./components/CreateTag";
import CreatePage from "./components/CreatePage";
import CreatePost from "./components/CreatePost";

function App() {
  const initialState = () => JSON.parse(localStorage.getItem("user")) || null
  const[user, setUser] = useState(initialState)

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])

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
              <Route path="/create-tag" element={<CreateTag />}></Route>
              <Route path="/create-page" element={<CreatePage />}></Route>
              <Route path="/create-post" element={<CreatePost />}></Route>
          </Routes>
          </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { InitFont } from "./InitFont.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import TeamMember from "./pages/TeamMember";
import About from "./pages/About";
import Post from "./pages/Post";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 

function App() {
  return (
    <Router>
      <>
        <InitFont />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/teamMember/*"
            element={<TeamMember></TeamMember>}
          ></Route>
          <Route
            path="/introduction"
            element={<Introduction></Introduction>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/post" element={<Post></Post>}></Route>
        </Routes>
      </>
      <ToastContainer style={{zIndex: 20}} hideProgressBar={true} position="bottom-right"/>
    </Router>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/global";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Bookmark from "./pages/Bookmark";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="bookmark" element={<Bookmark />}></Route>
      </Routes>
    </>
  );
}

export default App;

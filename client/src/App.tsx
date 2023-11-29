import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/global";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Bookmark from "./pages/Bookmark";
import { ImageData } from "./interface/unsplash";

function App() {
  const [bookmark, setBookmark] = useState<ImageData[]>([]);

  useEffect(() => {
    const savedBookmark = localStorage.getItem("savedBookmark");
    if (savedBookmark) {
      setBookmark(JSON.parse(savedBookmark));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedBookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const handleBookmark = (image: ImageData) => {
    const isBookmarked = bookmark.some(
      (bookmarkedImage) => bookmarkedImage.id === image.id
    );

    if (isBookmarked) {
      setBookmark(
        bookmark.filter((bookmarkedImage) => bookmarkedImage.id !== image.id)
      );
    } else {
      setBookmark([...bookmark, image]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Home handleBookmark={handleBookmark} bookmark={bookmark} />
          }
        ></Route>
        <Route path="search" element={<Search />}></Route>
        <Route
          path="bookmark"
          element={
            <Bookmark handleBookmark={handleBookmark} bookmark={bookmark} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

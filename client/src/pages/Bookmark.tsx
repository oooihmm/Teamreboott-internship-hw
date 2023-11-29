import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Dashboard from "../style/dashboard";
import Contents from "../style/contents";
import ImageBox from "../components/ImageBox";
import ImageWrapper from "../style/imagewrapper";
import { ImageData } from "../interface/unsplash";

type BookmarkProps = {
  bookmark: ImageData[];
  handleBookmark: (image: ImageData) => void;
};

const Bookmark = ({ bookmark, handleBookmark }: BookmarkProps) => {
  const chunkSize = Math.round(bookmark.length / 3);

  return (
    <Dashboard>
      <Contents>
        <ImageWrapper>
          {bookmark.slice(0, chunkSize).map((image) => (
            <ImageBox
              key={image.id}
              image={image}
              bookmark={bookmark}
              handleBookmark={handleBookmark}
            />
          ))}
        </ImageWrapper>
        <ImageWrapper>
          {bookmark.slice(chunkSize, chunkSize * 2).map((image) => (
            <ImageBox
              key={image.id}
              image={image}
              bookmark={bookmark}
              handleBookmark={handleBookmark}
            />
          ))}
        </ImageWrapper>
        <ImageWrapper>
          {bookmark.slice(chunkSize * 2, bookmark.length).map((image) => (
            <ImageBox
              key={image.id}
              image={image}
              bookmark={bookmark}
              handleBookmark={handleBookmark}
            />
          ))}
        </ImageWrapper>
      </Contents>
    </Dashboard>
  );
};

export default Bookmark;

import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { ImageData } from "../interface/unsplash";

import ImageDetail from "./ImageDetail";
import BookmarkButton from "./BookmarkButton";

const ImageBoxStyle = styled.div`
  padding: 0px;
  margin: 0 10px 20px 10px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  min-width: 350px;

  min-height: 300px;
  max-height: 400px;
  object-fit: cover;
`;

type ImageProps = {
  image: ImageData;
  bookmark: ImageData[];
  handleBookmark: (image: ImageData) => void;
};

const ImageBox = ({ image, bookmark, handleBookmark }: ImageProps) => {
  const isBookmarked = bookmark.some(
    (bookmarkedImage) => bookmarkedImage.id === image.id
  );

  const link = image.urls.small;
  const description = image.alt_description;

  const [bookmarkColors, setBookmarkColors] = useState({
    background: isBookmarked ? "#f15151" : "white",
    border: isBookmarked ? "#0000" : "#d1d1d1",
    color: isBookmarked ? "white" : "black",
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setBookmarkColors({
      background: "#f15151",
      border: "#0000",
      color: "white",
    });
    handleBookmark(image);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <ImageBoxStyle>
      <BookmarkButton bookmarkColors={bookmarkColors} onClick={handleClick} />
      <Image src={link} alt={description} onClick={handleModalOpen} />
      <ImageDetail
        image={image}
        bookmark={bookmark}
        handleBookmark={handleBookmark}
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
      />
    </ImageBoxStyle>
  );
};

export default ImageBox;

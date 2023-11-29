import React, { useState } from "react";
import styled from "styled-components";
import { ImageData } from "../interface/unsplash";
import BookmarkButton from "./BookmarkButton";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  width: 1000px;
  min-height: 70vh;
  overflow-y: auto;
  border-radius: 4px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ModalHeader = styled.div`
  width: 98%;
  height: 40px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  img {
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    border-radius: 100%;
    border: 1px solid #d1d1d1;
  }

  span {
    font-size: 17px;
    font-weight: 400;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;

const ModalBody = styled.div`
  height: 40px;
  gap: 40px;
  margin-top: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

type ImageDetailProps = {
  image: ImageData;
  bookmark: ImageData[];
  handleBookmark: (image: ImageData) => void;
  isModalOpen: boolean;
  handleModalClose: (open: boolean) => void;
};

const ImageDetail = ({
  image,
  bookmark,
  handleBookmark,
  isModalOpen,
  handleModalClose,
}: ImageDetailProps) => {
  const link = image.urls.small;
  const description = image.alt_description;
  const userImageLink = image.user.profile_image.medium;
  const userName = image.user.username;

  const isBookmarked = bookmark.some(
    (bookmarkedImage) => bookmarkedImage.id === image.id
  );
  const [bookmarkColors, setBookmarkColors] = useState({
    background: isBookmarked ? "#f15151" : "white",
    border: isBookmarked ? "#0000" : "#d1d1d1",
    color: isBookmarked ? "white" : "black",
  });

  const handleClick = () => {
    setBookmarkColors({
      background: "#f15151",
      border: "#0000",
      color: "white",
    });
    handleBookmark(image);
  };

  console.log(image);

  return (
    <>
      {isModalOpen && (
        <ModalOverlay onClick={() => handleModalClose(false)}>
          <ModalContent>
            <ModalHeader>
              <UserInfo>
                <img src={userImageLink} alt={userName} />
                <span>{userName}</span>
              </UserInfo>
              <BookmarkButton
                bookmarkColors={bookmarkColors}
                onClick={handleClick}
              />
            </ModalHeader>
            <img src={link} alt={description} />
            <ModalBody>
              <span>
                {image.width}px x {image.height}px
              </span>
              <span>
                {image.created_at.substring(0, image.created_at.indexOf("T"))}
              </span>
              <span hidden={!description}>{description}</span>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default ImageDetail;

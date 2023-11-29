import React from "react";
import Dashboard from "../style/dashboard";
import Contents from "../style/contents";
import ImageContainer from "../components/ImageContainer";
import { ImageData } from "../interface/unsplash";

type BookmarkProps = {
  bookmark: ImageData[];
  handleBookmark: (image: ImageData) => void;
};

const Bookmark = ({ bookmark, handleBookmark }: BookmarkProps) => {
  return (
    <Dashboard>
      <Contents>
        <ImageContainer
          imageList={bookmark}
          bookmark={bookmark}
          handleBookmark={handleBookmark}
        />
      </Contents>
    </Dashboard>
  );
};

export default Bookmark;

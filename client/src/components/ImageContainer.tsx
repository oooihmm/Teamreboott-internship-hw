import React from "react";
import ImageBox from "../components/ImageBox";
import ImageWrapper from "../style/imagewrapper";
import { ImageData } from "../interface/unsplash";

type imageContainerProps = {
  imageList: ImageData[];
  bookmark: ImageData[];
  handleBookmark: (image: ImageData) => void;
};

const ImageContainer = ({
  imageList,
  bookmark,
  handleBookmark,
}: imageContainerProps) => {
  const chunkSize = Math.round(imageList.length / 3);

  return (
    <>
      {" "}
      <ImageWrapper>
        {imageList.slice(0, chunkSize).map((image) => (
          <ImageBox
            key={image.id}
            image={image}
            bookmark={bookmark}
            handleBookmark={handleBookmark}
          />
        ))}
      </ImageWrapper>
      <ImageWrapper>
        {imageList.slice(chunkSize, chunkSize * 2).map((image) => (
          <ImageBox
            key={image.id}
            image={image}
            bookmark={bookmark}
            handleBookmark={handleBookmark}
          />
        ))}
      </ImageWrapper>
      <ImageWrapper>
        {imageList.slice(chunkSize * 2, imageList.length).map((image) => (
          <ImageBox
            key={image.id}
            image={image}
            bookmark={bookmark}
            handleBookmark={handleBookmark}
          />
        ))}
      </ImageWrapper>
    </>
  );
};

export default ImageContainer;

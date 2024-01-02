import React, { useMemo } from "react";
import ImageBox from "../components/ImageBox";
import ImageWrapper from "../style/imagewrapper";
import { ImageData } from "../interface/unsplash";
import { useBookmarkStore } from "../store/useBookmarkStore";

type imageContainerProps = {
  imageList: ImageData[];
};

const ImageContainer = ({ imageList }: imageContainerProps) => {
  const chunkSize = Math.round(imageList.length / 3);
  const { bookmarks } = useBookmarkStore();

  const comparedImageList = useMemo(() => {
    const compareBookmark = (image: ImageData) => {
      return bookmarks.some(
        (bookmarkedImage) => bookmarkedImage.id === image.id
      );
    };

    const checkedImageList = imageList.map((image) => ({
      ...image,
      isBookmarked: compareBookmark(image),
    }));

    return checkedImageList;
  }, [imageList, bookmarks]);

  return (
    <>
      {" "}
      <ImageWrapper>
        {comparedImageList.slice(0, chunkSize).map((image) => (
          <ImageBox key={image.id} image={image} />
        ))}
      </ImageWrapper>
      <ImageWrapper>
        {comparedImageList.slice(chunkSize, chunkSize * 2).map((image) => (
          <ImageBox key={image.id} image={image} />
        ))}
      </ImageWrapper>
      <ImageWrapper>
        {comparedImageList
          .slice(chunkSize * 2, imageList.length)
          .map((image) => (
            <ImageBox key={image.id} image={image} />
          ))}
      </ImageWrapper>
    </>
  );
};

export default ImageContainer;

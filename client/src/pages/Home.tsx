import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Dashboard from "../style/dashboard";
import Contents from "../style/contents";
import SearchContainer from "../components/SearchContainer";
import ImageContainer from "../components/ImageContainer";
import ImageWrapper from "../style/imagewrapper";
import { ImageData } from "../interface/unsplash";

type HomeProps = {
  bookmark: ImageData[];
  handleBookmark: (image: ImageData) => void;
};

const Home = ({ bookmark, handleBookmark }: HomeProps) => {
  const [imageList, setImageList] = useState<ImageData[]>([]);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: process.env.REACT_APP_ACCESS_KEY,
          count: 12,
        },
      })
      .then((response: AxiosResponse<ImageData[]>) => {
        const rawImageData: ImageData[] = response.data;
        setImageList(rawImageData);
        console.log(rawImageData);
      })
      .catch((error: string) => {
        console.error(error);
      });
  }, []);

  const chunkSize = Math.round(imageList.length / 3);

  return (
    <Dashboard>
      <SearchContainer></SearchContainer>
      <Contents>
        <ImageWrapper>
          {imageList.slice(0, chunkSize).map((image) => (
            <ImageContainer
              key={image.id}
              image={image}
              bookmark={bookmark}
              handleBookmark={handleBookmark}
            />
          ))}
        </ImageWrapper>
        <ImageWrapper>
          {imageList.slice(chunkSize, chunkSize * 2).map((image) => (
            <ImageContainer
              key={image.id}
              image={image}
              bookmark={bookmark}
              handleBookmark={handleBookmark}
            />
          ))}
        </ImageWrapper>
        <ImageWrapper>
          {imageList.slice(chunkSize * 2, imageList.length).map((image) => (
            <ImageContainer
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

export default Home;

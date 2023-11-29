import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Dashboard from "../style/dashboard";
import Contents from "../style/contents";
import SearchContainer from "../components/SearchContainer";
import ImageContainer from "../components/ImageContainer";
import { RawImageData, ImageData } from "../interface/unsplash";

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
      .then((response: AxiosResponse<RawImageData[]>) => {
        const rawImageData: RawImageData[] = response.data;
        const imageDataList: ImageData[] = rawImageData.map((image) => ({
          id: image.id,
          slug: image.slug,
          created_at: image.created_at,
          width: image.width,
          height: image.height,
          color: image.color,
          likes: image.likes,
          user: image.user,
          urls: image.urls,
          links: image.links,
          alt_description: image.description,
        }));
        setImageList(imageDataList);
      })
      .catch((error: string) => {
        console.error(error);
      });
  }, []);

  return (
    <Dashboard>
      <SearchContainer></SearchContainer>
      <Contents>
        <ImageContainer
          imageList={imageList}
          bookmark={bookmark}
          handleBookmark={handleBookmark}
        />
      </Contents>
    </Dashboard>
  );
};

export default Home;

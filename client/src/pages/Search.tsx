import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Dashboard from "../style/dashboard";
import Contents from "../style/contents";
import SearchBox from "../components/SearchBox";
import ImageContainer from "../components/ImageContainer";
import { SearchData, ImageData } from "../interface/unsplash";

type SearchProps = {
  bookmark: ImageData[];
  handleBookmark: (image: ImageData) => void;
};

const SearchTitle = styled.span`
  font-size: 45px;
  font-weight: 900;
`;

const Search = ({ bookmark, handleBookmark }: SearchProps) => {
  const [imageList, setImageList] = useState<ImageData[]>([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      axios
        .get(`https://api.unsplash.com/search/photos?query=${query}`, {
          params: {
            client_id: process.env.REACT_APP_ACCESS_KEY,
            per_page: 12,
          },
        })
        .then((response: AxiosResponse<SearchData>) => {
          const imageData: ImageData[] = response.data.results;
          setImageList(imageData);
        })
        .catch((error: string) => {
          console.error(error);
        });
    }
  }, [query]);

  return (
    <Dashboard>
      <Contents>
        <SearchTitle>{query}</SearchTitle>
        <SearchBox />
        <ImageContainer
          imageList={imageList}
          bookmark={bookmark}
          handleBookmark={handleBookmark}
        />
      </Contents>
    </Dashboard>
  );
};

export default Search;

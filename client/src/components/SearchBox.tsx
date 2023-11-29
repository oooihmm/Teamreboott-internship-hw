import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  width: calc(100vw / 2);
  min-width: 1180px;
  height: 40px;
  background-color: white;

  border: solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  &:focus {
    outline: none;
  }

  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 60px;
`;

const SearchBox = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?query=${searchValue}`);
    }
  };

  return (
    <SearchInput
      placeholder="고해상도 이미지 검색"
      value={searchValue}
      onChange={handleInputChange}
      onKeyDown={handleEnterKeyPress}
    ></SearchInput>
  );
};

export default SearchBox;

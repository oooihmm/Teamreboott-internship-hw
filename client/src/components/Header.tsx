import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  max-width: 100vw;
  height: 60px;
  padding: 0 20px;
  border-bottom: solid #d1d1d1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UnsplashLogo = styled.img`
  height: 32px;
`;

const Bookmark = styled.span`
  cursor: pointer;

  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;

  a {
    color: #767676;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <UnsplashLogo src="images/wordmark.png" alt="unsplash-logo" />
      </Link>
      <Bookmark>
        <Link to="bookmark">Bookmark</Link>
      </Bookmark>
    </HeaderContainer>
  );
};

export default Header;

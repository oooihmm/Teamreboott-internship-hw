import styled from "styled-components";

const Bookmark = styled.div<{
  $background?: string;
  $border?: string;
  $color?: string;
}>`
  width: 40px;
  height: 32px;

  position: absolute;
  top: 15px;
  right: 15px;

  color: ${(props) => props.$color};
  background-color: ${(props) => props.$background};
  border-radius: 4px;
  opacity: 1;
  border: 1px solid ${(props) => props.$border};
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

type BookmarkProps = {
  isBookmarked: Boolean;
  onClick: () => void;
};

const BookmarkButton = ({ isBookmarked, onClick }: BookmarkProps) => {
  const bookmarkColors = {
    background: isBookmarked ? "#f15151" : "white",
    border: isBookmarked ? "#0000" : "#d1d1d1",
    color: isBookmarked ? "white" : "black",
  };

  return (
    <Bookmark
      $background={bookmarkColors.background}
      $border={bookmarkColors.border}
      $color={bookmarkColors.color}
      onClick={onClick}
    >
      ♥︎
    </Bookmark>
  );
};

export default BookmarkButton;

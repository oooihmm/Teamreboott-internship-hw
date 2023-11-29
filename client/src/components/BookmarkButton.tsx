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
  bookmarkColors: { background: string; color: string; border: string };
  onClick: () => void;
};

const BookmarkButton = ({ bookmarkColors, onClick }: BookmarkProps) => {
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

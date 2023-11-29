import styled from "styled-components";

const Bookmark = styled.div<{ $background?: string; $color?: string }>`
  width: 40px;
  height: 32px;

  position: absolute;
  top: 15px;
  right: 15px;

  color: ${(props) => props.$color};
  background-color: ${(props) => props.$background};
  border-radius: 4px;
  opacity: 1;
  border: 1px solid #0000;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Bookmark;

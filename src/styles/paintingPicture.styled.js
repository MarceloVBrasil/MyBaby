import styled from "styled-components";

export const PaintingPicture = styled.div`
  width: 10rem;
  height: 15rem;
  border: 1px solid black;
  background-image: ${({ pic }) => `url(${pic})`};
  background-size: cover;
`;

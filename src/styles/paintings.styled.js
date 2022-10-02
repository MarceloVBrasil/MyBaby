import styled from "styled-components";

export const PaintingGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 2.5rem;
  column-gap: 5rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: auto auto;
    column-gap: 1rem;
  }
`;

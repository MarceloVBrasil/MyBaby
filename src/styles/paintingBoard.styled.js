import styled from "styled-components";

export const PaintingBorder = styled.div`
  background-color: ${({ color }) => color};
  border: ${({ color }) => `1rem solid ${color}`};
  border-radius: 5px;
`;

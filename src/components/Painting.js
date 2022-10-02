import { PaintingBorder } from "../styles/paintingBoard.styled";
import { PaintingPicture } from "../styles/paintingPicture.styled";
function Painting({ picture, color }) {
  return (
    <PaintingBorder color={color}>
      <PaintingPicture pic={picture} />
    </PaintingBorder>
  );
}

export default Painting;

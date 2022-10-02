import thomas01 from "../images/thomas-01.jpg";
import pic1 from "../images/1.jpg";
import pic2 from "../images/2.jpg";
import pic3 from "../images/3.jpg";
import pic4 from "../images/4.jpg";
import pic5 from "../images/5.jpg";
import pic6 from "../images/6.jpg";
import Painting from "./Painting";
import { PaintingGrid } from "../styles/paintings.styled";

export default function Paintings() {
  return (
    <PaintingGrid>
      <Painting picture={pic1} color={"hsl(120, 73%, 75%)"} />
      <Painting picture={pic2} color={"hsl(195, 53%, 69%)"} />
      <Painting picture={pic3} color={"hsl(120, 73%, 75%)"} />
      <Painting picture={pic4} color={"hsl(195, 53%, 69%)"} />
      <Painting picture={pic5} color={"hsl(120, 73%, 75%)"} />
      <Painting picture={pic6} color={"hsl(195, 53%, 69%)"} />
    </PaintingGrid>
  );
}

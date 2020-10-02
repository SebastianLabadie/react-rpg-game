import React from "react";
import styled from "styled-components";

const SpriteStyled = styled.div`
  display: inline-block;
  height: ${({ h }) => h}px;
  width: ${({ w }) => w}px;
  background-image: url(${({image})=>image});
  background-position: ${({ x,y }) => '-'+x+'px '+'-'+y+'px '};
  background-repeat: no-repeat;

  position: absolute;
  top: ${({ position }) => position.y + "px"};
  left: ${({ position }) => position.x + "px"};
`;
function Sprite({ image, data, position/* , style  */}) {
  const { y, x, h, w } = data;
  console.log(position)
  return (
    <SpriteStyled
      image={image}
      position={position}
     /*  style={style} */
      y={y}
      x={x}
      h={h}
      w={w}
    ></SpriteStyled>
  );
}

export default Sprite;

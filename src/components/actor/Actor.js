import React from 'react'
import styled from 'styled-components'
import Sprite from '../sprite/Sprite';


const ActorStyled=styled.div`

`
function Actor({sprite, position = { x: 0, y: 0 },data,step=0,dir=0}) {
    const { h, w } = data;
    return (
        <ActorStyled>
            <Sprite image={sprite}
      position={position}
      /* style={""} */
      data={{x:step*w,y:dir*h,h,w}} />
        </ActorStyled>
    )
}

export default Actor
import React from 'react'
import styled from 'styled-components'
import Actor from '../actor/Actor'
import m1 from "../../images/m1.png";
import useKeyPress from '../../hooks/use-key-press'
import useWalk from '../../hooks/use-walk'

const PlayerStyled=styled.div`

`
function Player() {
    const { dir, step, walk, position } = useWalk(3);

    const data = {
        h: 32,
        w: 32,
      };

    useKeyPress((e)=>{
        const dir = e.key.replace('Arrow','').toLowerCase()
        walk(dir)
        e.preventDefault()
    })

    return (
        <PlayerStyled>
            <Actor  sprite={m1}
      position={position}
      /* style={""} */
      step={step}
      dir={dir}
      data={data} />
        </PlayerStyled>
    )
}

export default Player
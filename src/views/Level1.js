import React from 'react'
import styled from 'styled-components'
const Level1Styled=styled.div`
padding:1rem;
border:1px solid grey;
border-radius:4px;
max-width:400px;
margin:3rem auto;

`
function Level1() {
    return (
        <Level1Styled>
            <h1>Vocaburary Game</h1>
        </Level1Styled>
    )
}

export default Level1
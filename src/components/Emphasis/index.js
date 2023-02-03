import React from 'react'
import * as C from './styles'

const Emphasis = (props) => {
  return (
    <C.EmphasisContainer>
        <C.EmphasisTitle>Destaques:</C.EmphasisTitle>
        <C.EmphasisBar />
        <C.EmphasisDiv>
            <C.EmphasisImage src={props.img1} />
            <C.EmphasisImage src={props.img2} />
        </C.EmphasisDiv>
    </C.EmphasisContainer>
  )
}

export default Emphasis
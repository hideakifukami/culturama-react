import React from 'react'
import * as C from './styles'


const Banner = (props) => {
  return (
    <>
        <C.Banner>
            <C.BannerImage src={props.src1} alt={props.alt1} />
            <C.BannerImage src={props.src2} alt={props.alt2} />
            <C.BannerImage src={props.src3} alt={props.alt3} />
            <C.BannerImage src={props.src4} alt={props.alt4} />
        </C.Banner>
    </>
  )
}

export default Banner
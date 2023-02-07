import React from 'react'
import { bannerData } from '../../data'
import Banner from '../Banner'
import Category from '../Category'
import Events from '../Events'
import Schedule from '../Schedule'
import * as C from './styles'

const Principal = () => {
  return (
    <C.Main>
        <Banner 
            src1={bannerData.banner1.src}
            src2={bannerData.banner2.src}
            src3={bannerData.banner3.src}
            src4={bannerData.banner4.src}

            alt1={bannerData.banner1.alt}
            alt2={bannerData.banner2.alt}
            alt3={bannerData.banner3.alt}
            alt4={bannerData.banner4.alt}
        />
        <Category />
        <Events />
        <Schedule />
    </C.Main>
  )
}

export default Principal
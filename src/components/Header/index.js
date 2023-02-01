import React from 'react'
import MenuItens from '../MenuItens'
import * as C from './styles'

const Header = () => {
  return (
    <C.Container>
        <C.Menu>
            <MenuItens />
        </C.Menu>
    </C.Container>
    )
}

export default Header
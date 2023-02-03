import React from 'react'
import MenuItens from '../MenuItens'
import * as C from './styles'

const Header = () => {
  return (
    <>
        <C.Header>
            <C.Nav>
                    <MenuItens 
                        valueLink1='Programação'
                        valueLink2='Categorias'
                        valueLink3='Seu local'
                    />
            </C.Nav>
        </C.Header>
    </>
    )
}

export default Header
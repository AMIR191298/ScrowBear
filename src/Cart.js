import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'


function Cart({cartitems}) {
    return (
        <Container>
            <CartItems cartitems={cartitems}/>
            <CartTotal />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    margin: 14px 18px 0px 18px;
`

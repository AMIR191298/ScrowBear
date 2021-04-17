import React from 'react'
import styled from 'styled-components'

function CartItem({id,item}) {
        let options = []
        for( let i=1; i<Math.max(item.quantity+1, 10); i++)(
            options.push(<option value={i}> Qty : {i}</option>)
        )

    return (
        <Container>
           <CartImage>
               <img src={item.image}/>
            </CartImage>
            <CartItemInfo>
                <CartItemInfoTop><h2>{item.name}
                </h2>
                </CartItemInfoTop>
                <CartItemInfoButtom>
                    <Quantity>
                        <select
                            
                            value={item.quantity}
                        >
                            {options}
                        </select>
                        </Quantity>
                    <DeleteCartItem>Delete</DeleteCartItem>
                </CartItemInfoButtom>
            </CartItemInfo> 
            <CartItemPrice>${item.price}</CartItemPrice>
        </Container>
    )
}

export default CartItem

const CartImage = styled.div`
height: 180px;
width: 180px;
flex-shrink: 0;
flex-grow: 0;
margin-right: 16px;
 img{
     object-fit: contain;
     height: 100%;
     width: 100%;
    
 }
`

const Container = styled.div`
 display: flex;
 padding-top:12px;
 padding-buttom:12px;
 border-bottom: 1px solid #ddd;
`

const CartItemInfo = styled.div`
    margin-left:16px;
    flex-grow: 1;
`

const CartItemInfoTop = styled.div`
 color: #03B3B0;
 h2{
     font-size: 20px;
 }
`

const CartItemInfoButtom = styled.div`
 display: flex;
 align-items: center;
 margin-top: 10px;
`

const Quantity = styled.div`
    select{
        border-radius: 7px;
        background-color: #f0f2f2;
        padding: 8px;
        bax-shadow: 0 2px 5px rgba(15,17,17,.3);
        :focus{
            outline: none;
        }
    }
`

const DeleteCartItem = styled.div`
color: #03B3B0;
margin-left: 16px;
cursor: pointer;
`

const CartItemPrice = styled.div`
 font-size: 20px;
 font-weight: 700;
 margin-left: 16px:
`






import React from 'react'
import styled from 'styled-components'
import {db} from './Firebase'

function Product(props) {
    const addToCart = () =>{
        const cartItem = db.collection('cartitems').doc(props.id);
        cartItem.get()
        .then((doc)=>{
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })

            } else{
                db.collection('cartitems').doc(props.id).set({
                    name: props.title,
                    image: props.image,
                    price: props.price,
                    rating: props.rating,
                    quantity: 1
                })
            }
        })
    }
    return (
        <Container>
            <Title>
                {props.title}
            </Title>
            <Price>
                ${props.price}
            </Price>
            <Rating>
                 {
                     Array(props.rating)
                     .fill()
                     .map( rating => <p>⭐</p>)
                 }
            </Rating>
            <Image src={props.image}/>
            <ActionSection>
                <AddToCardButton onClick={addToCart}>
                    Add to cart
                </AddToCardButton>
            </ActionSection>
               
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    max-height: 400px;
    flex: 1;
    padding: 20px;
    margin:10px;
    display: flex;
    flex-direction: column;
`
const Title = styled.span`

`
const Price = styled.span`
    font-weight: 500;
`
const Rating =styled.div`
    display: flex;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`
const AddToCardButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    
`
const ActionSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10px;
`

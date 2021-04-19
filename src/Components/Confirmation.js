import React from "react";
import styled from 'styled-components'

const ConfirmationDiv = styled.div`
    color: #E21527;
    display: block;
    width: 500px;;
    margin: 50px auto;
    border: 1px solid #E21527;
    padding: 3rem;
    text-align: center;
`

// We are routed to the confirmation page after a user submits the form on Form.js
// We take in the props of pizza order and use destructure to name the variables.
const Confirmation = (props) => {
    const { name, size, pepperoni, mushrooms, sausage, pineapples, instructions} = props.pizzaOrder

    return (
        <ConfirmationDiv>
            <h2>Hey {name}!</h2>
            <h2>Thank you for the order!</h2>
            <h3>Your {size} {pepperoni ? 'pepperoni' : ''} {mushrooms ? 'mushroom' : ''} {sausage ? 'sausage' : ''} {pineapples ? 'pineapple' : ''} pizza  will be sent shortly!</h3>
            <h4>Your special instructions for the store: {instructions}</h4>
        </ConfirmationDiv>
    )
}

export default Confirmation;
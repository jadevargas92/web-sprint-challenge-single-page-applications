import React from "react";
import styled from 'styled-components'

const H1 = styled.h1`
    text-align: center;
`

const FormGrouping = styled.div`
    color: #E21527;
    display: block;
    width: 500px;;
    margin: 50px auto;
    border: 1px solid #E21527;
    padding: 3rem;
`;

const Label = styled.label`
    margin-bottom: 0.5em;
    color: #E21527;
    display:block;
`

const Input = styled.input`
	padding: 0.5em;
	color: #E21527;
	background: #48F35E;
	border-radius: 3px;
	width: 90%;
	margin: 0.5em 0;;
`;

const Button = styled.button`
    display: block;
    margin: auto;
    border-radius: 20px;
    background-color: #E21527;
    color: #fff;
    padding: 18px 30px;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    border: none;
    transition: transform .2s ease;
    &:hover{
        background-color: #48F35E;  
    transform: translateY(-.5rem) scale(1.02);
`

const Select = styled.select`
  width: 80%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 2em;
`


// State is handled in App.js
// Our pizza form 
const Form = (props) => {
    const { name, size, pepperoni, sausage, mushrooms, pineapples, instructions} = props.pizzaOrder;
    const { onChange, onSubmit, errors } = props;

    return (
        <FormGrouping>
            <H1>Order A Pizza!</H1>
            <div style={{ color: 'red'}}>
                <div>{errors.name}</div>
            </div>
            <form onSubmit={onSubmit}>
                <Label>
                    Name:  
                    <Input
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </Label>
                <Label>
                    Size:  
                    <Select value={size} name='size' onChange={onChange}>
                        <option value=''>--select a pizza size--</option>
                        <option value='small'>10" Small</option>
                        <option value='medium'>14" Medium</option>
                        <option value='large'>16" Large</option>
                    </Select>
                </Label>
                    <Label key='pepperoni'>
                        Pepperoni:
                        <Input 
                            name='pepperoni'
                            type='checkbox'
                            checked={pepperoni}
                            onChange={onChange}
                        />
                    </Label>
                <Label>
                </Label>
                    <Label key='sausage'>
                        Sausage: 
                        <Input 
                            name='sausage'
                            type='checkbox'
                            checked={sausage}
                            onChange={onChange}
                        />
                    </Label>
                <Label>
                </Label>
                    <Label key='mushrooms'>
                        Mushrooms:
                        <Input 
                            name='mushrooms'
                            type='checkbox'
                            checked={mushrooms}
                            onChange={onChange}
                        />
                    </Label>
                <Label>
                </Label>
                    <Label key='pineapples'>
                        Pineapples:
                        <Input 
                            name='pineapples'
                            type='checkbox'
                            checked={pineapples}
                            onChange={onChange}
                        />
                    </Label>
                <Label>
                    Instructions:  
                    <Input
                        type='text'
                        name='instructions'
                        value={instructions}
                        onChange={onChange}
                    />
                </Label>
                <Button>Submit The Order</Button>
            </form>
        </FormGrouping>
    )
}

export default Form;
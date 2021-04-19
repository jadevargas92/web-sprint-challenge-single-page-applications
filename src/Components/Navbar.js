import React from "react";
import NavbarItems from './NavbarItems'
import styled from 'styled-components'

const Nav = styled.nav` 
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    height: 6rem;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    margin: auto;
`;

const StyledLi = styled.li`
    list-style: none;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;

const StyledDiv = styled.div`
display: inline-block;
margin: auto;
`

const StyledA = styled.a`
    text-decoration: none;
`;


// We import Navbar items and map over each item to post on the Navbar
const Navbar = (props) => {
    return (
        <Nav>
            <StyledDiv>
            <i className="fas fa-pizza-slice"> Lambda Eats</i>
            </StyledDiv>
            <StyledUl>
                {NavbarItems.map((item, index) => {
                    return (
                        <StyledLi key={index}>
                            <StyledA href={item.url} className='nav-item'>
                                {item.name}
                            </StyledA>
                        </StyledLi>
                    )
                })}
            </StyledUl>
        </Nav>
    )
}

export default Navbar;
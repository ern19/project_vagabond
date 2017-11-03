import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledNavBar = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;

    text-shadow: 1px 1px #2b2b2b;
    color: rgba(31, 75, 247, .9)
`
const StyledAnchors = styled.a`
    font-size: 18px;
    
    padding: 20px;
    color: #747578;
    text-shadow: 1px 1px #72E0FF;
    font-family: 'Roboto', sans-serif;
    text-decoration: none; 
    &:hover {
        font-size: 20px;
    }
    
`

const HeaderLink = styled.a`
    text-decoration: none;
    color: #747578;
    text-shadow: 2px 2px #72E0FF;
    margin: 10px;
`
const SignUp = styled.div`
    display: flex;
    flex: row;
`
const Wander = styled.h4`
    margin: 10px;
`
class NavBar extends Component {
    render() {
        return (
            <StyledNavBar>
                <div>
                    <h1><HeaderLink href={'/'}>Vagabond</HeaderLink></h1>
                    <Wander>wander wisely</Wander>
                </div>
               
                    
                
            </StyledNavBar>
        );
    }
}

export default NavBar; 

{/* <SignUp>
    <StyledAnchors href="#">SIGN UP</StyledAnchors>
    <StyledAnchors href="#">LOG-IN</StyledAnchors>
</SignUp> */}
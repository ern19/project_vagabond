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
    padding: 20px;
    color: #747578;
    text-shadow: 1px 1px #72E0FF;
`

const HeaderLink = styled.a`
    text-decoration: none;
    color: #747578;
    text-shadow: 2px 2px #72E0FF;

`
class NavBar extends Component {
    render() {
        return (
            <StyledNavBar>
                
                    <h1><HeaderLink href={'/'}>Vagabond</HeaderLink></h1>
                <div><StyledAnchors href="#">Sign-Up</StyledAnchors>
                    <StyledAnchors href="#">Log in</StyledAnchors></div>
                    
                
            </StyledNavBar>
        );
    }
}

export default NavBar;
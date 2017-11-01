import React, { Component } from 'react';
import styled from 'styled-components'

const StyledNavBar = styled.div` 
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;

    text-shadow: 1px 1px #2b2b2b;
    color: rgba(31, 75, 247, .9)
`
const StyledAnchors = styled.a`
    padding: 20px;
`

class NavBar extends Component {
    render() {
        return (
            <StyledNavBar>
                
                    <h1>Vagabond</h1>
                <div><StyledAnchors href="#">Sign-Up</StyledAnchors>
                    <StyledAnchors href="#">Log in</StyledAnchors></div>
                    
                
            </StyledNavBar>
        );
    }
}

export default NavBar;
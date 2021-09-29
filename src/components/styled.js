import styled from 'styled-components'
import { FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap'


export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid lightBlue;
    color: lightBlue;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
    background: lightBlue;
    color: white
    }
    &:focus {
        outline: dotted;
        box-shadow: 0px 0px 2px red;
    }
`

export const SearchComponent = styled(FormControl)`
width: 700px;
margin:0 20px 0 0;
`
export const NavWrapper = styled(Navbar)`
    background: rgba(4, 8, 111, 0.371);
    `

export const LinkWrapper = styled(Nav.Link)`
        color:white !important;
        font-size: 1.3rem
    
`

export const DropDownWrapper = styled(NavDropdown)`
        color:white !important;
        font-size: 1.3rem;
        &:hover {
        color: white !important
    }
    
`
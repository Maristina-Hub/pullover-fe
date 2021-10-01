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
@media (min-width: 300px) and (max-width: 1199.98px) { 
    width: 250px; 
    font-size: 1 rem;
}
@media (min-width: 320px) and (max-width: 600px) {
    width: 200px; 
}
@media (min-width: 375px) and (max-width: 812px) {
    width: 26   0px; 
}
@media (min-width: 414px) and (max-width: 736px) {
    width: 300px; 
}
@media (min-width: 768px) and (max-width: 1024px) {
    width: 500px; 
}
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
        @media (min-width: 300px) and (max-width: 1199.98px) { 
        width: 300px; 
        font-size: 1 rem;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
        width: 500px; 
        }

    
`
export const ProductWrapper = styled.div `
.card {
    border-color: transparent;
    transition: all 3s linear
}

.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 2s linear
}

&:hover {
    .card {
        border: 0.04rem solid rgba(13, 13, 142, 0.359);
        box-shadow: 2px 2px 5px 0px rgba(13, 13, 142, 0.359)
    }

    .card-footer {
        background: rgba(13, 13, 142)
    }
}

.img-container {
    position: relative;
    overflow: hidden;
}

.img-container:hover .card-img-top {
    transform: scale(1.5)
}

.cart-btn {
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: lightBlue;
    border: none;
    color: white;
    font-size: 0.8rem
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear
}

.img-container:hover .cart-btn {
    transform: translate(0, 0)
}

.cart-btn:hover {
    color: blue;
    cursor: pointer;
}



`


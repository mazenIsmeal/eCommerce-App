import {Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css'
import HeaderCounter from './HeaderCounter/HeaderCounter';
import { useAppSelector } from '@store/hooks';
import { getCartTotalQuantity } from '@store/cart/cartSlice';
import WishList from '@assets/wishlist.svg?react'
import CartItems from '@assets/CartItems.svg?react'

const {headerLeftBar, header, headerContainer, logoCart} = styles

const Header = () => {
    const cartItem = useAppSelector(getCartTotalQuantity)
    const wishlistQuantity = useAppSelector(state => state.wishlist.itemsId.length)

  return (
    <header className={header}>
        <div className={headerContainer}>
        <div>
            <h1>LazyLogo</h1>
        </div>
        <div className={headerLeftBar}>
            {/* <HeaderWislist />
            <HeaderBasket /> */}
            <HeaderCounter totalQuantity={wishlistQuantity} svgIcon={<WishList title='cart' />} title='Wishlist' to='wishlist' />
            <HeaderCounter totalQuantity={cartItem} svgIcon={<CartItems className={logoCart} title='cart' />} title='cart' to='cart' />
        </div>
        </div>
        {/* NavBar */}
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Lazy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="about-us">About</Nav.Link>
                    <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="login">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="register">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
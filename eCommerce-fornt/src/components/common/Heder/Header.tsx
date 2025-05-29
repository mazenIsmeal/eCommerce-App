import styles from './styles.module.css';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@store/hooks';
import { getCartTotalQuantity } from '@store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const {logo, pumpCartQuantity, basketQuantity} = styles

const Header = () => {
    const navigate= useNavigate()
    const cartItem = useAppSelector(getCartTotalQuantity)
    const [isAnimate, setIsAnimate] = useState(false)
    const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

    useEffect(() => {
        if (!cartItem) {
            return;
        }
        setIsAnimate(true)
        const dubounce = setTimeout(() => {
            setIsAnimate(false)
        }, 300)
        return () => clearTimeout(dubounce)
    }, [cartItem])

  return (
    <header className='header'>
        <div className={logo}>
            <h1>LazyLogo</h1>
            <span className="material-symbols-outlined" onClick={() => navigate('/cart')}>shopping_cart</span>
            <div className={quantityStyle}>{cartItem}</div>
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
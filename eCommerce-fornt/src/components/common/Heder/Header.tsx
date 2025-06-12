import HeaderBasket from '@components/ecommerce/HeaderBasket/HeaderBasket';
import HeaderWislist from '@components/ecommerce/HeaderWislist/HeaderWislist';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css'

const {headerLeftBar, header, headerContainer} = styles

const Header = () => {
    

  return (
    <header className={header}>
        <div className={headerContainer}>
        <div>
            <h1>LazyLogo</h1>
        </div>
        <div className={headerLeftBar}>
            <HeaderWislist />
            <HeaderBasket />
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
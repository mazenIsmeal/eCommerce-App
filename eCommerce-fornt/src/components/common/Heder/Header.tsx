import styles from './styles.module.css';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const {logo} = styles
const Header = () => {
  return (
    <header className='header'>
        <div className={logo}>
            <h1>LazyLogo</h1>
            <span className="material-symbols-outlined">shopping_cart</span>
            <div>0</div>
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
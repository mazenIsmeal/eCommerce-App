import styles from './styles.module.css';
import {Container, Nav, Navbar} from 'react-bootstrap'

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
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Categories</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#link">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
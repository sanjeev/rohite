import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRedux } from 'hyper_hooks';
import logo from 'assets/hyper/images/logo.png';

const NavBar = () => {
    const { appSelector } = useRedux();

    const { user, userLoggedIn } = appSelector((state) => ({
        user: state.Auth.user,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="py-lg-3">
            <Container>
                <Navbar.Brand href="/" className="me-lg-5">
                    <img src={logo} alt="" className="logo-dark" height="18" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <i className="mdi mdi-menu"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav as="ul" className="me-auto align-items-center">
                        <Nav.Item as="li" className="mx-lg-1">
                            <Nav.Link href="" className="active">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-1">
                            <Nav.Link href="">Features</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-1">
                            <Nav.Link href="">Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-1">
                            <Nav.Link href="">FAQs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-1">
                            <Nav.Link href="">Clients</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-1">
                            <Nav.Link href="">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {userLoggedIn || user ? (
                        <Link to="/account/logout" className="btn btn-outline-light">
                            Logout
                        </Link>
                    ) : (
                        <Link to="/account/login" className="btn btn-outline-light">
                            Login
                        </Link>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

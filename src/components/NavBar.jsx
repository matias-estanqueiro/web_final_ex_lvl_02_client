import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {

    return (
        <Navbar variant='dark' bg='dark' expand='lg'>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <img alt='' src='/img/Logo_horizontal.png' width='144' height='65' className='d-inline-block align-top' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='navbarScroll' />

                <Navbar.Collapse id='navbarScroll'>
                    <Nav className='me-auto my-2 my-lg-0 fs-6' navbarScroll>
                        <Nav.Link href='/user'>Users</Nav.Link>
                        <Nav.Link href='/shop'>Products</Nav.Link>
                        <Nav.Link href='/blog'>Blog</Nav.Link>
                        <Nav.Link href='/meet-us'>Meet us!</Nav.Link>
                        <Nav.Link href='/user/login'>Login</Nav.Link>
                        <Nav.Link href='/user/register'>Register</Nav.Link>
                    </Nav>

                    <Form className='d-flex'>
                        <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
                        <Button variant='outline-success'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
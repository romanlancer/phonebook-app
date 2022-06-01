import MainContainer from 'components/Container';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <MainContainer>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to={'/'}>
            Contacts
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to={'/LogIn'}>
              LogIn
            </Nav.Link>
            <Nav.Link as={NavLink} to={'/SignUp'}>
              SignUp
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </MainContainer>
  );
};

export default NavBar;

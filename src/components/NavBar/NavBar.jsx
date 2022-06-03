import MainContainer from 'components/Container';
import Logout from 'components/Logout';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';

const NavBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <MainContainer>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Contacts</Navbar.Brand>

          {isLoggedIn ? (
            <Logout />
          ) : (
            <Nav>
              <Nav.Link as={NavLink} to={'/LogIn'}>
                LogIn
              </Nav.Link>
              <Nav.Link as={NavLink} to={'/SignUp'}>
                SignUp
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </MainContainer>
  );
};

export default NavBar;

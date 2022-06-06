import { VscGithubInverted } from 'react-icons/vsc';
import { BsJournalBookmark, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Navbar
        style={{ padding: '0rem' }}
        fixed="bottom"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="ms-3">
            <BsJournalBookmark size={35} />
          </Navbar.Brand>

          <Nav className="me-3">
            <Nav.Link target={'_blank'} href="https://github.com/romanlancer">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="author link">Author Git</Tooltip>}
              >
                <div>
                  {' '}
                  <VscGithubInverted size={25} />
                </div>
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link
              target={'_blank'}
              href="https://www.facebook.com/roman.girich/"
            >
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="author link">Author Facebook</Tooltip>}
              >
                <div>
                  {' '}
                  <BsFacebook size={25} />
                </div>
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link
              target={'_blank'}
              href="https://www.linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD-%D0%B3%D0%B8%D1%80%D0%B8%D1%87-1511bb226/"
            >
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="author link">Author LinkedIn</Tooltip>}
              >
                <div>
                  {' '}
                  <BsLinkedin size={25} />
                </div>
              </OverlayTrigger>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;

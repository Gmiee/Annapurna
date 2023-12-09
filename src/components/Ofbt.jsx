import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
// import { Avatar } from '@chakra-ui/react'


const Ofbt = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      {[false].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand>A N N A P U R N A</Navbar.Brand>
            {
              isAuthenticated ? (<div style={{ display: 'flex', alignItems: 'center', marginLeft:'auto', marginRight:'7px' }}>
              <p style={{ fontSize: '17px', margin: '0' }}>👋🏻{user.given_name}</p>
            </div>)
              :
              (<Button onClick={e => loginWithRedirect()} variant="primary" style={{ marginLeft: 'auto', marginRight: '10px' }}>Login</Button>)
            }
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setShowOffcanvas(true)} />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              style={{ height: '400px' }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ fontFamily: '"Poppins", sans-serif' }} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  A N N A P U R N A
                </Offcanvas.Title>
                {/* {isAuthenticated && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: '20px', margin: '0 10px' }}>{user.given_name}</p>
                    <Avatar size="sm" src={user.picture} />
                  </div>
                )} */}
              </Offcanvas.Header>
              <Offcanvas.Body style={{ textAlign: 'center', fontFamily: '"Poppins", sans-serif', placeItems:'center', fontSize: '22px' }}>
                <Nav className="justify-content-end flex-grow-1 pe-3 m-auto">
                  <Nav.Link as={Link} to={'/'} onClick={handleCloseOffcanvas}>
                    <button className='btn01'>Home</button>
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to={'/About'} onClick={handleCloseOffcanvas}>
                    <button className='btn01'>About</button>
                  </Nav.Link> */}
                  <Nav.Link as={Link} to={'/Donate'} onClick={handleCloseOffcanvas}>
                    <button className='btn01'>Donate</button>
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/Contactus'} onClick={handleCloseOffcanvas}>
                    <button className='btn01'>Contact</button>
                  </Nav.Link>
                </Nav>

              </Offcanvas.Body>
              <Container style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                {isAuthenticated ? (
                  <Button style={{backgroundColor:'tomato', border:'0'}} onClick={e => logout()}>Logout</Button>
                ) : (
                  <>
                    <Button onClick={e => loginWithRedirect()} variant='outline-primary' style={{ marginRight: '5px' }}>Login</Button>
                  </>
                )}
              </Container>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Ofbt;

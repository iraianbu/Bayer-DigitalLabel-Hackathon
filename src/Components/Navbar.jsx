import react, { Component } from "react";
import Reactdom from "react-dom";
import "./style.css";



import { Container, Navbar, Nav } from "react-bootstrap";


class Navcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
         <Navbar className="navv"  expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
              <Navbar.Brand href="#home" className="navbrandname">
                Bayer-IDL
              </Navbar.Brand>
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto mr-3">
              <div className="navdiv navstyle ">
                  <Nav.Link href="/Dashboard" className=" navlinks">
                    Dashboard
                  </Nav.Link>
                </div>
                <div className="navdiv  navstyle ">
                  <Nav.Link href="/Store" className=" navlinks">
                    Store
                  </Nav.Link>
                </div>
                <div className="navdiv navstyle ">
                  <Nav.Link href="/Foodcourt" className=" navlinks">
                    Authenticity
                  </Nav.Link>
                </div>
              
                <div className="navdiv navstyle ">
                  <Nav.Link href="/Forms" className=" navlinks">
                    Support
                  </Nav.Link>
                </div>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
      </div>
    );
  }
}

export default Navcomp;

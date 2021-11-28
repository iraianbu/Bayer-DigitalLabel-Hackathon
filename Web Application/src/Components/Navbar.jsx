import react, { Component } from "react";
import Reactdom from "react-dom";
import { Image } from "react-bootstrap";
import "./style.css";


import logo from "../Images/logo.png";
import { Container, Navbar, Nav } from "react-bootstrap";


class Navcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
         <Navbar fixed="top" className="navv"   expand="lg"
            style={{backgroundColor: "white", border:"none", borderBottom:"2px solid #E8EAE6",padding:"40px",marginBottom:"90px"}} 

        >
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
              <Navbar.Brand href="#home" className="navbrandname">
                <Image style={{height:"50px",width:"50px"}} src={logo}
              
                />
              </Navbar.Brand>
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav 
                style={{padding:"30px"}}
              className="ml-auto mr-3">
              <div className="navdiv navstyle ">
                  <Nav.Link 
                  style={{color:"#0B4619", fontWeight:"bolder"}}
                  href="/Dashboard" className=" navlinks">
                    Dashboard
                  </Nav.Link>
                </div>
               
                <div className="navdiv  navstyle ">
                  <Nav.Link 
                  style={{color:"#0B4619", fontWeight:"bolder"}}
                  href="/Store" className=" navlinks">
                    Store
                  </Nav.Link>
                </div>
                <div className="navdiv navstyle ">
                  <Nav.Link 
                  style={{color:"#0B4619", fontWeight:"bolder"}}
                  href="/Authenticity" className=" navlinks">
                    Authenticity
                  </Nav.Link>
                </div>
              
                <div className="navdiv navstyle ">
                  <Nav.Link 
                  style={{color:"#0B4619", fontWeight:"bolder"}}
                  href="/Support" className=" navlinks">
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

import react, { Component } from "react";
import Reactdom from "react-dom";
import { Container,Dropdown,DropdownButton, Row,Modal, Col, Button, Figure, Card,Carousel, ThemeProvider,Navbar,NavDropdown,Nav,Spinner,Image} from "react-bootstrap";
import "./style.css"

import QR from "./QR";
import {Link} from "react-router-dom";


class Digitalwallet extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            balance:287
        };
      
    }
  
    render(){
   
        
        return(
            <>
            
            <Container fluid
                // style={{marginTop:"50px"}}
            >
                <Row >
                    <Col style={{padding:"5%",backgroundColor:"#D3E4CD"}} md={6}>
                        <p style={{fontFamily:"roboto",fontSize:"1.8rem",fontWeight:"bolder"}} >Digital Wallet</p>
                        <p style={{fontFamily:"roboto",fontSize:"1.3rem"}}>Join Bayer's loyalty program, a one  stop rewards program for 
                        all your  shopping solutions.  Enabling you to get greater 
                        discounts and  offers using your exclusive loyalty points.</p>
                        <Button  className="mr-3" style={{width:"150px"}} variant="dark">View More</Button>
                        <Button  style={{width:"150px"}} variant="outline-secondary">Recharge</Button>
                    </Col>
                    <Col md={6}>
                    <img style={{width:"100%"}} src="walletbg.jpg"></img>
                    </Col>
                </Row>

            </Container>
            <Container fluid style={{backgroundColor:"#FFF3E4",padding:"5%"}}>
           
                <Row className="widget ">
                    
                <Col md={7}>   
                        <div className="left-panel panel">
                            
                           
                            <div  className="city" style={{fontSize:"1rem",fontFamily:"roboto"}}>
                            Your Wallet Balance
                            </div>
                            <div  className="temp " style={{fontSize:"2.9rem"}}>
                            ₹ {this.state.balance}
                            </div>
                            <Button className="mt-2" style={{width:"100%"}}  variant="primary">View History</Button>
                        </div>
                     </Col>   
                     
                <Col md={5}>
                <i className="fas fa-5x fa-wallet mt-3 "></i>
                </Col>

                    </Row>
                
               

            </Container>

            </>
         
        
        )
    }
    
}
export default Digitalwallet;
import react, {Component} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <Container fluid 
                style={{backgroundColor:"#283027", color:"white"}}
            >
                <Row style={{width:"70%", margin:"auto", paddingTop:"30px"}}>
                    <Col md={3}>
                        <h4> Quick Links </h4>
                        <ul style={{listStyleType:"none"}}>
                        <Link to={`/Home`} style={{textDecoration:"none", color:"white"}}>
                            <li  style={{margin:"20px 10px"}}> Home </li>
                        </Link>
                        <Link to={`/Home`} style={{textDecoration:"none", color:"white"}}>
                            <li  style={{margin:"20px 10px"}}> Authenticity </li>
                        </Link>
                        <Link to={`/Home`} style={{textDecoration:"none", color:"white"}}>
                            <li  style={{margin:"20px 10px"}}> Your Cart </li>
                        </Link>
                        <Link to={`/Home`} style={{textDecoration:"none", color:"white"}}>
                            <li  style={{margin:"20px 10px"}}> Get Support </li>
                        </Link>
                        
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h4> Follow us </h4>
                        <span style={{margin:"10px 10px"}}><i class="fab fa-facebook fa-2x"></i></span>
                        <span style={{margin:"10px 10px"}}><i class="fab fa-instagram fa-2x"></i></span>
                        <span style={{margin:"10px 10px"}}><i class="fab fa-twitter fa-2x"></i></span>
                        <span style={{margin:"10px 10px"}}><i class="fab fa-youtube fa-2x"></i></span>
                    </Col>
                    <Col>
                        <h4> Our Smart Features </h4>
                        <ul style={{listStyleType:"none"}}>
                            <Link to={`/Home`} style={{textDecoration:"none", color:"white"}}>
                                <Button variant="light"  style={{margin:"10px 0px", width:"85%"}}> Get Sugggestions </Button>
                            </Link>
                            <Link to={`/Home`} style={{textDecoration:"none", color:"white"}}>
                                <Button variant="light"   style={{width:"85%"}}> Product Authenticity </Button>
                            </Link>
                        </ul>
                        
                    </Col>
                    <Row>
                    <Col>  <p style={{textAlign:"Center"}}> No Copyright Reserved © 2021 </p> </Col>
                    </Row>
                </Row>
                

            </Container>
            




            </>



        )
    }
}

export default Footer;
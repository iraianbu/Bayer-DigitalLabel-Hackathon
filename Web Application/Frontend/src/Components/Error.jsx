import react, {Component} from 'react';
import { Row, Col, ListGroup, InputGroup, Form, Button, Image,  ButtonGroup, Container, FormControl, Card, Dropdown, DropdownButton } from 'react-bootstrap';

class Error extends Component{
   
    constructor(props){
        super(props);
        this.state ={
           
        };
    }
    
    
    render(){
        return(
            <Container fluid style={{marginTop:"100px", width:"80%", textAlign:"center"}}>
                <Row>
                    <Col>
                        <h1 style={{fontSize:"200px", fontWeight:"bolder", textAlign:"center"}} > 404 Error </h1>
                        <p style={{fontSize:"30px", marginTop:"50px"}}> <strong> The Requested URL is not Found </strong> </p>
                        <p
                            style={{margin:"30px", width:"50%", fontSize:"20px"}}
                        > Return to  <a href="/Dashboard"> Home </a> </p>
                    </Col>
                </Row>
                
                
            </Container>

        )
    }
}

export default Error;
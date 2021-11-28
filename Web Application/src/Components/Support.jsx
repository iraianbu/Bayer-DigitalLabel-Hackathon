import React, {Component} from 'react';
import {  Accordion, Panel,Button, ButtonToolbar,  Modal, FormGroup, ControlLabel, FormControl, Image, Container,Row,Col,Form} from 'react-bootstrap';
import FileDrop from './FileDrop';
import products from './products';
class Support extends Component{
    constructor(props){
        super(props);
        this.state ={
        prodId: 0,
        orders: products,
        orderChosen: {}
        };
        this.renderdetails=this.renderdetails.bind(this);
    }
    
    retriveOrderOptions() {
        return(
            this.state.orders.map((order)=>{return <option value={order.name}>{order.name}</option>})
        );
    }
    renderdetails()
    {
        if(Object.keys(this.state.orderChosen).length === 0)
        {
            return <div></div>
        }
        else{
        return(
                    <Container>
                    <Row style={{margin:"20px"}}>
                        <Col md={3} >
                            <Image 
                                style={{height:"100px", width:"100px", margin:"10px"}}
                            src={this.state.orderChosen.img_src} />

                        </Col>
                        <Col>
                            <h5 style={{color:"red"}}> Order Delivered </h5> 
                            <h6>{this.state.orderChosen.name} | {this.state.orderChosen.size} | {this.state.orderChosen.type} -  {this.state.orderChosen.qty}</h6>
                            <p style={{color:"green"}}>  ₹ {this.state.orderChosen.price}</p>
                        </Col>
                    </Row>
                    <h5> Fill out your Issue, We will get back to you ASAP! </h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            as="textarea"
                            placeholder="Describe you issue!"
                            style={{ height: '100px' }}
                            />
                        
                    </Form.Group>
                    <Button className="btn1" type="submit">
                        Submit
                    </Button>
                    </Container>
        
        );
        }
    }
    async setOrderChosen(name){
        
            var a=this.state.orders.filter((obj)=>obj.name===name)[0];
            await this.setState({orderChosen:a});
    
    }
    render(){

        return(
            <>
            <Container fluid
                style={{marginTop:"90px", width:"80%"}}
            >
            {/* <h1> boss </h1> */}
            <Row> 
                <Col md={8}>
                    <Row style={{marginTop:"30px", marginBottom:"30px"}}> 
                        <Col md={9}> <h3> Problem with your Order? </h3> </Col> 
                        <Col style={{textAlign:"right"}}> <Button variant="light" 
                            onClick={() => {
                                document.querySelector("#form-input").hidden = false;
                                
                            }}
                        > Raise Issue </Button> </Col>
                    </Row>
                   
                    
                    <Row> 
                        <Col><Form hidden id="form-input" 
                            style={{transition:"visibility 0.3s linear,opacity 0.3s linear"}}
                        >
                             <Form.Group>
                                <Form.Select onChange={async(event) => {
                                    await this.setOrderChosen(event.target.value);
                                    console.log(this.state.orderChosen);
                                                                 }} >
                                <option value="">Choose your Order</option>
                                {this.retriveOrderOptions()}
                                </Form.Select>
                            </Form.Group>
                           {this.renderdetails()}
                        </Form></Col>
                    </Row>

                    <hr />

                    <h3 style={{marginTop:"30px"}}> Get Smart Sugestions </h3>
                    {/* <h5> Use our Smart AI to get you the best products for your needs. </h5> */}
                    <p style={{marginBottom:"30px"}}> Upload a picture of your problem and get our suggestions </p>
                    <Row>
                        <Col style={{backgroundColor:"#F4F4F4", border:"5px dashed #e0dcdc"}}>
                            <FileDrop />
                            
                        </Col>

                    </Row>
                    <Button className="btn2"
                        style={{marginTop:"20px", marginBottom:"100px"}}
                    onClick={() => {
                        // upload file 
                    }}>Upload</Button>
                    <Row> 
                        <Col md={9} style={{marginTop:"20px "}}> <h3> Frequently Asked Questions (FAQ) </h3> </Col> 
                    </Row>
                    <Row><Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>I want to return my product, what should I do ?</Accordion.Header>
                            <Accordion.Body>    
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Can I exchange my order, instead of returning it?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How long does it take to refund my order </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How to check for product originality using Bayer label?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>I received a counterfeit product, How to claim?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                            
                    
                    
                    </Col></Row>

                </Col> </Row>
                
            </Container>
            </>
        )
    }
}

export default Support;
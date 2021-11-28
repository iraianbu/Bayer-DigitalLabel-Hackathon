import react, {Component} from 'react';
import { Row, Col, ListGroup, InputGroup, Form, Button, Image,  ButtonGroup, Container, FormControl, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import products from './products';
import RangeSlider from 'react-bootstrap-range-slider';
import React, { useState } from 'react';

import {Link} from "react-router-dom";

class Success extends Component{
   
    constructor(props){
        super(props);
        this.state ={
           seconds: 15
        };
    }
    
    componentDidMount() 
    {
        setInterval(() => {
            if(this.state.seconds === 0) window.location.href="http://localhost:3000/Dashboard";
            else{
                this.setState({seconds: this.state.seconds -1 });
            }
        }, 1000); 
        fetch('http://localhost:7000/completeorder',{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
     }
    render(){
        return(
            <Container fluid style={{marginTop:"100px", width:"80%"}}>
                <Row>
                    <Col>
                        <Image src="data:image/png;base64,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"
                         style={{height:"50px", width:"50px"}} />
                        <p style={{fontSize:"30px", display:"inline", marginLeft:"30px"}}> <strong> Hurray! Payment Successful </strong> </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p
                            style={{margin:"30px", width:"50%", fontSize:"20px"}}
                        > Thank you for shopping with us. Your order has been placed successfully and will be delivered to you ASAP! </p>

                    </Col>

                </Row>
                <Row>
                    <Col style={{marginLeft:"30px"}}>
                        <Button variant="dark">
                            Continue Shopping
                        </Button>
                    </Col>

                </Row>
                <Row style={{margin:"30px"}}>
                    <Col>
                       <p> You will be redirected to your Dashboard in <strong>{this.state.seconds}</strong> second(s)</p>
                    </Col>

                </Row>
            </Container>

        )
    }
}

export default Success;
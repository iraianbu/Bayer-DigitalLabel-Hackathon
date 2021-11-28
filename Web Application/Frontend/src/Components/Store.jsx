import react, {Component} from 'react';
import { Row, Col, ListGroup, InputGroup, Form, Button, ButtonGroup, Spinner,Container, FormControl, Card, Dropdown, DropdownButton } from 'react-bootstrap';
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

class Store extends Component{
   
    constructor(props){
        super(props);
        this.state ={
            products: [],
            selectedCatagories: ['Insecticide', 'Herbicide', 'Fungicide' ],
            selectedMin: 0,
            selectedMax: 10000,
            slidervalue:23,
            cartlength:0,
            spinnerstatus:1
        };
        this.addcomponent=this.addcomponent.bind(this);
    }
    componentDidMount()
    {
        fetch('https://bayeridl-backend.herokuapp.com/cartlength',{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({cartlength:res["count"]});
            this.setState({products:res["arr"]});
            console.log(res["arr"]);
            this.setState({spinnerstatus:0});
        })

    }

  
     filterProducts = (prod) => {
        
        for(var i=0; i<this.state.selectedCatagories.length; i++){
            if(prod.type === this.state.selectedCatagories[i]) {
                if(prod.price >= this.state.selectedMin && prod.price <= this.state.selectedMax) {
                    // console.log(prod, this.state.selectedMax, this.state.selectedMin);
                    return true;
                }
               
            }
        }
        return false;
    }
    handleCheck = async(checked, value) => {
        if(value === "All") {
            if(checked){
                await this.setState({selectedCatagories: ['Insecticide', 'Herbicide', 'Fungicide' ]})
                document.querySelector("#cat1").checked = false;
                document.querySelector("#cat2").checked = false;
                document.querySelector("#cat3").checked = false;
            }
            else{
                document.querySelector("#cat0").checked= true;
                
                
            }
        }
        
        else if(value !== "All"){
            document.querySelector("#cat0").checked = false;
            var checkboxes = document.querySelectorAll("input[type='checkbox']");
            var arr = [];
            await this.setState({selectedCatagories: arr})
            console.log('selected catogores = ', this.state.selectedCatagories.length);
            for(var i=0; i<checkboxes.length; i++){
                if(checkboxes[i].checked === true) {
                    arr = this.state.selectedCatagories;
                    arr.push(checkboxes[i].value);
                    await this.setState({selectedCatagories: arr})
                }
            }
        }
    };
   
    handleRange = async(value, side, id) => {
        var changeId;
        if(id === "minValue") changeId = "minValueText";
        else if(id === "maxValue") changeId = "maxValueText";
        else if(id === "minValueText") changeId = "minValue";
        else changeId = "maxValue";
        if(side === 0){
            await this.setState({selectedMin: value});
            document.querySelector("#"+changeId).value = value;
        }
        else{
            await this.setState({selectedMax: value});
            document.querySelector("#"+changeId).value = value;

        }
        console.log(this.state.selectedMin + " " + this.state.selectedMax);

    }
     getShortDesc = (sentence) => {
        return sentence.slice(0,60)+"  . . .";
    }
    setValue=async(n)=>{
        this.setState({slidervalue:n});
    };

    addcomponent()
    {
        if(this.state.spinnerstatus===1)
        {
            return(
                <div className="mb-5" style={{textAlign:"center",marginTop:"20%"}}>
                <Spinner style={{width:"40px",height:"40px"}}  animation="border" role="status">
                </Spinner>
                </div>
            );
        }
        else{
            return(

                <Container fluid className="store"
                
            >
                <Row>
                    <Col md={3} 
                    style={{paddingLeft:"40px", position:"fixed", paddingRight:"50px"}}
                    className="store-filter-col">
                        <Row> <Col>
                        

                            <h1 
                            style={{fontSize:"25px", backgroundColor:"#F7F7F7", color:"#0B4619", padding:"10px 20px", borderRadius:"20px"}}
                            className="store-title"> Filter</h1>
                            <h3 className="store-sub-title">Catagories </h3>
                            

                            <Row
                            
                            > <Col> 
                                
                                {/* <Form.check label="Fungicide" /> */}
                                <input 
                                style={{width:"20px", height:"20px"}}
                                type="checkbox" id="cat0" value = 'All' defaultChecked={true} onClick={(e) => this.handleCheck(e.target.checked, e.target.value)}></input> 
                                <label className="store-filter-data"> All </label> 
                            </Col> </Row>
                            <Row> <Col> 
                                <input 
                                style={{width:"20px", height:"20px"}}
                                type="checkbox" id="cat1" value = 'Fungicide'  onClick={(e) => this.handleCheck(e.target.checked, e.target.value)}></input> 
                                <label className="store-filter-data"> Fungicide </label> 
                            </Col> </Row>
                            <Row> <Col> 
                                <input 
                                style={{width:"20px", height:"20px"}}
                                type="checkbox" id="cat2" value = 'Herbicide'  onClick={(e) => this.handleCheck(e.target.checked, e.target.value)}></input> 
                                <label className="store-filter-data"> Herbicide </label> 
                            </Col> </Row>
                            <Row> <Col> 
                                <input 
                                style={{width:"20px", height:"20px", backgourndColor:"red"}}
                                type="checkbox" id="cat3" value = 'Insecticide'  onClick={(e) => this.handleCheck(e.target.checked, e.target.value)}></input> 
                                <label className="store-filter-data"> Insecticide </label> 
                            </Col> </Row>
                            


                        </Col></Row>

                        <Row><Col>
                            
                            <h1 className="store-sub-title"> Price Range </h1>
                            <Row>
                            {/* <Col md={6} className="range-slider-col"> <MySlider /> </Col> */}
                            <Col md={2}> <label> Min </label> </Col>
                            <Col md={8} className="range-slider-col"> 
                            <RangeSlider
                                id="minValue"
                                // value={this.state.slidervalue}
                                defaultValue="0" 
                                onChange={e => this.handleRange(e.target.value, 0, e.target.id)}
                                max="10000"
                                min="0"
                            
                                />
                                {/* <input type="range" id="maxValue" min="0" max="10000" defaultValue="10000" onChange={(e) => handleRange(e.target.value, 1, e.target.id)} ></input>  */}
                            </Col>
                            
                            </Row>
                            <Row>
                            {/* <Col md={6} className="range-slider-col"> <MySlider /> </Col> */}
                            <Col md={2}> <label> Max </label> </Col>
                            <Col md={8} className="range-slider-col"> 
                            <RangeSlider
                                id="maxValue"
                                defaultValue="10000" 
                                onChange={e => this.handleRange(e.target.value, 1, e.target.id)}
                                max="10000"
                                min="0"
                            
                                />
                                {/* <input type="range" id="maxValue" min="0" max="10000" defaultValue="10000" onChange={(e) => handleRange(e.target.value, 1, e.target.id)} ></input>  */}
                            </Col>
                            
                            </Row>
                            <Row>
                                <Col md={6}> 
                                    <input type="text" className="range-input"  placeholder="0" id="minValueText" onChange={(e) => this.handleRange(e.target.value, 0, e.target.id)}></input>
                                </Col>
                                <Col md={6}> 
                                    <input type="text" className="range-input"  placeholder="10000" id="maxValueText" onChange={(e) => this.handleRange(e.target.value, 1, e.target.id)}></input>
                                </Col>
                            </Row>
                        
                        </Col></Row>
                    </Col>







                    <Col md={{span:"8", offset:"3"}}
                        style={{paddingLeft:"30px"}}
                     className="store-products-col">
                        
                        <Row 
                        style={{backgroundColor:"#F7F7F7", color:"#0B4619", borderRadius:"20px"}}
                        className="store-searchbar">
                            <Col md={6}
                                style={{padding:"12px 30px"}}
                            >
                            <i className="fas fa-search"></i>
                                <input 
                                    style={{backgroundColor:"#F7F7F7", color:"#0B4619"}}
                                type="text" className="store-products-search-input" placeholder="Search"></input>
                            </Col>
                            
                            <Col  style={{}}>
                            <div style={{cursor:"pointer"}}
                            onClick={()=>{
                               window.location.href="https://bayeridl.herokuapp.com/Cart"
                           }}>
                           <i className="fas fa-2x fa-shopping-cart" style={{position:"absolute", right:"10px", top:"8px"}}></i>
                             <span className='badge badge-success' style={{position:"absolute", right:"10px", top:"8px"}} id='lblCartCount'>{this.state.cartlength}</span>
                            </div>
                            </Col>
                        </Row>
                        <Row className="mt-3 mb-3">
                        
                      
                            
                      
                        </Row>
                        <Row>
                           
                            {this.state.products.filter((p) => this.filterProducts(p)).map((prod) => {
                                return(
                                    <>
                                    
                                    <Col md={4} className="" style={{cursor:"pointer"}}>
                                    <Link to={`/Dashboard/${prod._id}`} style={{textDecoration:"none", color:"black"}}>
                                        <Card 
                                        style={{border:"none"}}
                                        className="store-product-card">
                                            
                                            <Card.Img 
                                                style={{height:"270px", width:"270px"}}
                                            className="store-product-card-img"src={prod.img_src} />
                                            <Card.Title className="store-product-card-title">{prod.name}</Card.Title>
                                            <Row> <Col
                                                style={{margin:"auto 20px"}}
                                            > {this.getShortDesc(prod.info)} </Col>   </Row>
                                            <Row className="store-product-price-row">
                                                <Col style={{}}>
                                                    
                                                    <p style={{color:"#116530", fontSize:"20px", fontWeight:"bolder"}}>
                                                    <span style={{padding:"20px"}}>  ₹ </span>
                                                         {prod.price}</p>
                                                </Col>
                                            </Row>
                                        </Card>
                                        </Link>
                                    </Col>
                                    
                                    </>
                                )

                            })}
                           
                            {/* {this.state.products.map((prod) => {
                                return(
                                    <>
                                    <Col md={4} className="">
                                        <Card className="store-product-card">
                                            <span className="store-view-icon"><i className="fas fa-eye" onClick={() => {
                                                alert('jio');
                                            }}></i></span>
                                            <Card.Img className="store-product-card-img"src={prod.img_src} />
                                            <Card.Title className="store-product-card-title">{prod.name}</Card.Title>
                                            <Row className="store-product-price-row">
                                                <Col>
                                                    <Row><p className="store-product-price-head"> Price </p></Row>
                                                    <Row><p> ₹ 750</p></Row>
                                                </Col>
                                                <Col>
                                                <Button className="store-product-view-button"> View </Button>
                                                </Col>
                                            </Row>
                                        </Card>
                            
                                    </Col>
                                    </>
                                )

                            })} */}
                        </Row>
                    </Col>
                   
                </Row>
               
            </Container>

            );
        }
    }
    render(){
       
      

        return(

            <>
            {this.addcomponent()}
            
            </>




        )
    }
}

export default Store;
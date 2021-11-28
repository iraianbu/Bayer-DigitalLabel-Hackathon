import react, { Component } from "react";
import Reactdom from "react-dom";
import { Container, Row, Col, Button, Figure, Card,Carousel, ThemeProvider,Navbar,NavDropdown,Nav,Link,Badge,Spinner} from "react-bootstrap";
import "./style.css"
import products from "./products";
import QR from "./QR";
import { QuantityPicker } from 'react-qty-picker';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { color } from "@mui/system";
import { Tabs,Tab,TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

class Productdetail extends Component{
    constructor(state)
    {
        super(state);
        this.state={
            frequency:"Order Frequency",
            prod:[],
            spinnerstatus:1,
            size:"small",
            qty:0

        }
        this.addcomponent=this.addcomponent.bind(this);

    }
    componentDidMount()
    {
        const key={id:this.props.id}
        console.log(key);
        fetch('http://localhost:7000/products',{
         method: 'POST',
         headers: {
             'Content-Type' : 'application/json'
         },
         body:JSON.stringify(key)
     }).then((res)=>{
         if(res.ok)
         return res.json();
     }).then(async(res)=>{
       
         await this.setState({prod:res});
        await this.setState({spinnerstatus:0});
         
     })
    }
    addcomponent()
    {
        if(this.state.spinnerstatus==1)
        {
                return(
                    <div style={{textAlign:"center",marginTop:"20%"}}>
                    <Spinner  style={{width:"40px",height:"40px"}}  animation="border" role="status">
                    </Spinner>
                    </div>
                );
        }
        else{
            return(
                <>
                <Container  style={{marginTop:"100px"}}>
                <Row>
                    <Col md={5} style={{textAlign:"center"}}>
                    <img src={this.state.prod.img_src} style={{padding:"30px",height:"400px",width:"400px",borderRadius:"10%"}} alt=""></img>
                    </Col>
                    <Col md={7}>
                        <h2  style={{fontWeight:"bolder"}}>{this.state.prod.name}</h2>
                        <p style={{fontFamily:"roboto",fontSize:"1.5rem"}}>₹ {this.state.prod.price}</p>
                        <Row>
                            <Col md={3}>
                            <p style={{}}><span style={{fontWeight:"bolder"}}>Availability<span style={{color:"green"}}> : In-Stock </span></span></p>
                            <p style={{}}> <span style={{fontWeight:"bolder"}}>Product Code</span> : {this.state.prod._id}</p>
                            <p style={{}}><span style={{fontWeight:"bolder"}}>Tags</span> :  <Badge style={{padding:"5px"}}pill bg="dark"> <span style={{color:"white"}}>{this.state.prod.type}</span></Badge></p>
                            
                            </Col>
                            <Col md={9}>
                            <p style={{fontFamily:"roboto"}}>{this.state.prod.info}</p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Nav style={{marginLeft:"0px"}}>
                                    <NavDropdown title={this.state.frequency}  id="basic-nav-dropdown">
                                        <NavDropdown.Item className="dropoption" onClick={async()=>{await this.setState({frequency:"Single"})}}>Single</NavDropdown.Item>
                                        <NavDropdown.Item className="dropoption" onClick={async()=>{await this.setState({frequency:"Once A week"})}}>Once A Week</NavDropdown.Item>
                                        <NavDropdown.Item className="dropoption" onClick={async()=>{await this.setState({frequency:"Monthly"})}}>Monthly</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                             </Col>
                            <Col md={4}>
                            <QuantityPicker onChange={async(value)=>await this.setState({qty:value})} max={10} min={0} style={{height:"100px"}}/>
                            </Col> 
                            <Col md={4}>
                            <ToggleButtonGroup
                                        color="primary"
                                        exclusive
                                      
                            > 
                                        <ToggleButton onClick={async()=>await this.setState({size:"small"})}  value="web">Small</ToggleButton>
                                        <ToggleButton onClick={async()=>await this.setState({size:"medium"})}   value="android">Medium</ToggleButton>
                                        <ToggleButton onClick={async()=>await this.setState({size:"large"})} value="ios">Large</ToggleButton>
                                       
                            </ToggleButtonGroup>
                            </Col> 
                            
                        </Row>
                        <Row>
                            <Col md={3}>
                            <div style={{marginTop:"30px"}}>
                                <Button className="btn2" style={{width:"100%"}} onClick={()=>{
                                        const p=this.state.prod;
                                    p["frequency"]=this.state.frequency;
                                    p["qty"]=this.state.qty;
                                    p["size"]=this.state.size;
                                        const key=p;
                                        console.log(key);
                                        fetch('http://localhost:7000/cart',{
                                        method: 'POST',
                                        headers: {
                                            'Content-Type' : 'application/json'
                                        },
                                        body:JSON.stringify(key)
                                        })
                                }} variant="primary" size="md">
                                Add to Cart
                                </Button>
                            </div>
                            </Col>
                       
                        
                        {/* <Col md={3} className="" style={{cursor:"pointer"}}>
                    <Card 
                    style={{border:"none"}}
                    >
                        
                        <Card.Img 
                            style={{height:"100px", width:"100px"}}
                         src={this.state.prod.img_src} />
                        <Card.Title><h3 style={{fontWeight:"bolder", marginTop:"30px"}}>{this.state.prod.name}</h3></Card.Title>
                        <Card.Text style={{color:"green"}}>
                        ₹ {this.state.prod.price}
                        </Card.Text>
                    </Card>
                </Col>
                <Col md={1} style={{textAlign:"center", marginTop:"110px"}}>
                    <span><i class="fas fa-plus fa-2x"></i></span>
                    
                </Col>
                <Col md={3} className="" style={{cursor:"pointer"}}>
                    <Card 
                    style={{border:"none"}}
                    >
                        
                        <Card.Img 
                            style={{height:"100px", width:"100px"}}
                         src={this.state.prod.img_src} />
                        <Card.Title><h3 style={{fontWeight:"bolder", marginTop:"30px"}}>{this.state.prod.name}</h3></Card.Title>
                        <Card.Text style={{color:"green"}}>
                        ₹ {this.state.prod.price}
                        </Card.Text>
                    </Card>
                </Col>   */}
                   </Row> </Col>
                </Row>
            </Container>
           <Container fluid style={{width:"80%", marginTop:"50px"}}>
           <h2 style={{margin:"50px auto", fontWeight:"bolder"}}> Frequently Bought Together </h2>
            <Row >
              
                <Col md={3} className="" style={{textAlign:"center"}}>
                    <Card 
                    style={{border:"none"}}
                    >
                        
                        <Card.Img 
                            style={{height:"150px", width:"150px", margin:"auto"}}
                         src={this.state.prod.img_src} />
                        <Card.Title><h5 style={{fontWeight:"bolder", marginTop:"30px"}}>{this.state.prod.name}</h5></Card.Title>
                        <Card.Text style={{color:"green"}}>
                        ₹ {this.state.prod.price}
                        </Card.Text>
                    </Card>
                </Col>
                <Col md={1} style={{textAlign:"center", marginTop:"110px"}}>
                    <span><i class="fas fa-plus fa-2x"></i></span>
                    
                </Col>
                <Col md={3} className="" style={{textAlign:"center"}}>
                    <Card 
                    style={{border:"none"}}
                    >
                        
                        <Card.Img 
                            style={{height:"150px", width:"150px", margin:"auto"}}
                         src={this.state.prod.img_src} />
                        <Card.Title><h5 style={{fontWeight:"bolder", marginTop:"30px"}}>{this.state.prod.name}</h5></Card.Title>
                        <Card.Text style={{color:"green"}}>
                        ₹ {this.state.prod.price}
                        </Card.Text>
                    </Card>
                </Col>
              
            </Row>
               <h2 style={{marginTop:"30px", fontWeight:"bolder"}}> More Info </h2>
            <Tabs defaultTab="vertical-tab-one" style={{marginBottom:"50px"}}>
                <TabList >
                    <Tab style={{cursor:"pointer"}} tabFor="vertical-tab-one">Registered Crops</Tab>
                    <Tab style={{cursor:"pointer"}} tabFor="vertical-tab-two">Effective Against</Tab>
                    <Tab style={{cursor:"pointer"}} tabFor="vertical-tab-three">Geography</Tab>
                    <Tab style={{cursor:"pointer"}} tabFor="vertical-tab-four">Dosage</Tab>
                    <Tab style={{cursor:"pointer"}} tabFor="vertical-tab-five">Applicability</Tab>
                    <Tab style={{cursor:"pointer"}} tabFor="vertical-tab-six">Disposal Guidlines</Tab>    
                </TabList>

                <TabPanel tabId="vertical-tab-one">
                    {this.state.prod.registered_crops}
                </TabPanel>

                <TabPanel tabId="vertical-tab-two">
                    {this.state.prod.effective_against}
                </TabPanel>

                <TabPanel tabId="vertical-tab-three">
                {this.state.prod.geography}
                </TabPanel>
                <TabPanel tabId="vertical-tab-four">
                {this.state.prod.dosage}
                </TabPanel>
                <TabPanel tabId="vertical-tab-five">
                {this.state.prod.applicabality}
                </TabPanel>
                <TabPanel tabId="vertical-tab-six">
                {this.state.prod.disposal_guidelines}
                </TabPanel>
                
             </Tabs>
             
             </Container>
             </>
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
export default Productdetail;
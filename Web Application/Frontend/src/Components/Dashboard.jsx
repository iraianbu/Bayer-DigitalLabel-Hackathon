import react, { Component } from "react";
import Reactdom from "react-dom";
import { Container,Dropdown,DropdownButton, Row,Modal, Col, Button, Figure, Card,Carousel, ThemeProvider,Navbar,NavDropdown,Nav,Spinner,Image} from "react-bootstrap";
import "./style.css"
import QR from "./QR";
import {Link} from "react-router-dom";


class Dashboard extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            products:[],
            orders:[],
            b:0,
            selectedcategory:"Select Category",
            c:0,
            spinnervisibility:1,
           show:false,
           setShow:false
        };
        this.addspinner=this.addspinner.bind(this);
        this.addfilterbutton=this.addfilterbutton.bind(this);
      
    }
   addqr()
   {
       if(this.state.b===1)
       {
           return (
            <Modal show={this.state.setShow} onHide={()=>{this.setState({setShow:true})}}>
            <Modal.Header >
              <Modal.Title>Scan Your Product's QR </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{textAlign:"center"}}>
                <QR/>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>{this.setState({setShow:false})}}>
            Close
          </Button>
         
            </Modal.Footer>
          </Modal>
           );

       }
       else
       return <div></div>

   }
   addspinner()
   {
       if(this.state.spinnervisibility==1)
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
               <>
                <Container 
                    style={{marginTop:"100px", width:"80%"}}
                fluid className="dash">
                <Row  className="dash-head">
                <Col md={8}
                style={{margin:"auto 50px"}}
                >
                <Row >
                    <Row style={{padding:"30px 10px"}}> 
                        <Col md={9}> <h3> Your Products </h3>  </Col> 
                        <Col style={{textAlign:"right"}}> 
                            <Button className="btn1"
                            onClick={async()=>{
                                await this.setState({b:1});
                                await this.setState({setShow:true});
                            }}
                            > 
                            <span><i class="fas fa-qrcode "></i> <strong>Scan QR</strong> </span>
                            </Button>
                            {/* <DropdownButton id="drop-btn1"
                                
                            title={<span><i class="fas fa-plus"></i> <strong>Add</strong> </span>}  > 
                                <Dropdown.Item onClick={async()=>{
                                        await this.setState({b:1});
                                        await this.setState({setShow:true});
                                }}  style={{cursor:"pointer"}} >Scan QR </Dropdown.Item>
                                <Dropdown.Item  href="/Store">Go to Store</Dropdown.Item>
                            </DropdownButton> */}
                        
                        </Col>
                    </Row>
                {this.addqr()}
                <div style={{}} >
                {this.state.products.map((prod) => {
                    return(
                        <Row  className="tile"
                        style={{padding:"20px", backgroundColor:"#F4F4F4", borderRadius:"10px", marginBottom:"20px"}}>

                            <Col md={2}> <Image style={{height:"120px",width:"120px"}} src = {prod.img_src} /> </Col>
                            <Col md={6} className="order-history-data">
                                <Row>  <Col> <h4> <strong> {prod.name}  </strong></h4> </Col> </Row> 
                                <Row>  <Col> <h5> {prod.type} | {prod.size} </h5> </Col> </Row> 

                                <Row> 
                                    <Col> <p> <strong> Last Purchased on: </strong> 28 Aug, 2021 </p> </Col>
                                </Row>
                            </Col>

                            <Col md={3} style={{textAlign:"center"}}>

                                {/* <Row style={{marginBottom:"10px"}}> <Col> 
                                    <Button variant="light"
                                    style={{color:"#0B4619", border:"1px solid #0B4619", width:"100%"}}> 
                                     View <i class="fas fa-eye"></i>  </Button>
                                </Col></Row> */}
                                <Row> <Col> 
                                    <Link to={`/Dashboard/${prod._id}`}>
                                    <Button variant="light" 
                                        style={{color:"#0B4619", border:"1px solid #0B4619", width:"100%"}}> 
                                        Buy Again </Button>
                                    </Link>
                                </Col></Row>

                            </Col>
                        </Row>
                    )                                    
                })}
                </div>
            </Row>
            <Row>
                <Row> 
                    <Col> <h3> Orders on the way </h3>  </Col> 
                    
                </Row>

                {this.state.orders.map((prod) => {
                    return(
                        <Row  className="tile"
                        style={{padding:"20px", backgroundColor:"#F4F4F4", borderRadius:"10px", marginBottom:"20px"}}>

                            <Col md={2}> <Image style={{height:"120px",width:"120px"}} src = {prod.img_src} /> </Col>
                            <Col md={6} className="order-history-data">
                                <Row>  <Col> <h4> {prod.name} </h4> </Col> </Row> 
                                <Row>  <Col> <h5> {prod.type} | {prod.size} </h5> </Col> </Row> 

                                <Row> 
                                    <Col> <p className="order-history-desc"> <strong> Expected Delivery: </strong> 28 Aug, 2021 </p> </Col>
                                </Row>
                            </Col>

                            <Col md={3} style={{textAlign:"center"}}>

                                <Row style={{marginBottom:"10px"}}> <Col> 
                                <Link to={`/Authenticity/${prod._id}`}>
                                    <Button variant="light"
                                    style={{color:"#0B4619", border:"1px solid #0B4619", width:"100%"}}> 
                                     Track   <i class="fas fa-location-arrow"></i> </Button>
                                </Link>
                                </Col></Row>
                                

                            </Col>
                        </Row>
                       
                    )
                       
                    
                })}
            </Row>
        </Col>          
        <Col style={{marginTop:"30px"}}>
            <h3> Your stats </h3>
            <Row style={{marginBottom:"10px", marginTop:"35px"}}>
                <Col md={3} 
                    style={{}}
                > <i style={{backgroundColor:"#F4F4F4", borderRadius:"10px", color:"#0B4619", padding:"20px"}} class="far fa-gem fa-2x"></i> </Col>
                <Col style={{marginLeft:"20px"}}>
                    <Row>
                        <Col> <h4> 750</h4></Col>
                    </Row>
                    <Row>
                        <Col> <p> Loyal Coins </p></Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col md={3} 
                    style={{}}
                > <i style={{backgroundColor:"#F4F4F4", borderRadius:"10px", color:"#0B4619", padding:"20px"}} class="fas fa-money-bill-wave fa-2x"></i> </Col>
                <Col style={{marginLeft:"20px"}}>
                    <Row>
                        <Col> <h4> 1126</h4></Col>
                    </Row>
                    <Row>
                        <Col> <p> Saved with us </p></Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col md={3} 
                    style={{}}
                > <i style={{backgroundColor:"#F4F4F4", borderRadius:"10px", color:"#0B4619", padding:"20px"}} class="fas fa-trophy fa-2x"></i> </Col>
                <Col style={{marginLeft:"20px"}}>
                    <Row>
                        <Col> <h4> 11</h4></Col>
                    </Row>
                    <Row>
                        <Col> <p> Orders Purchased </p></Col>
                    </Row>
                </Col>
            </Row>
            
          
            <Row className="order-sugg" style={{marginTop:"50px"}}>
                <Row > <Col> <h3> Suggested Orders </h3>  </Col> </Row>
                {this.state.products.map((prod) => {
                return(
                    <Link to={`/Dashboard/${prod._id}`} style={{textDecoration:"none", color:"black"}}>
                    <Row 
                        style={{backgroundColor:"#F4F4F4", borderRadius:"10px", margin:"10px 10px", padding:"20px"}}
                        className="tile"
                    >   

                        <Col md={4}> <Image style={{height:"50px", width:"50px" }} src = {prod.img_src} /> </Col>
                        <Col>
                            <h6> {prod.name} </h6>
                        </Col>
                        
                        </Row>
                    </Link>
                    
                )
        })}
                
            </Row>
        </Col>
        </Row>
        </Container>
               </>
           );
       }
   }

   addfilterbutton()
   {
       if(this.state.spinnervisibility==0)
       {
            return(
                <>
                {/* <Container  className="mt-5">
                <Row>
                    <Col md={6}>
            <p style={{display:"inline-block",fontFamily:"roboto",fontSize:"1.2rem"}}>Filter your products by Category</p>
                </Col>
                <Col md={6}>
                <Nav className=" " style={{display:"inline-block",position:"absolute",right:"80px"}}>
                <NavDropdown title={this.state.selectedcategory}  id="basic-nav-dropdown">
                <NavDropdown.Item className="dropoption" onClick={async()=>{await this.setState({selectedcategory:"Select Category"})}}>All</NavDropdown.Item>
                    
                    <NavDropdown.Item className="dropoption" onClick={async()=>{await this.setState({selectedcategory:"Fungicide"})}}>Fungicide</NavDropdown.Item>
                    <NavDropdown.Item className="dropoption" onClick={async()=>{await this.setState({selectedcategory:"Herbicide"})}}>Herbicide</NavDropdown.Item>
                    <NavDropdown.Item className="dropoption" onClick={async()=>{await this.setState({selectedcategory:"Pesticide"})}}>Pesticide</NavDropdown.Item>
                    <NavDropdown.Item className="dropoption" onClick={async()=>{await this.setState({selectedcategory:"Insecticide"})}}>Insecticide</NavDropdown.Item>
                    
                </NavDropdown>
                </Nav>
                </Col>
                </Row>
            </Container> */}
                </>
            );
       }
       else
       return <div></div>
   }

   componentDidMount()
   {
    fetch('http://localhost:7000',{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then((res)=>{
        if(res.ok)
        return res.json();
    }).then(async(res)=>{
       
        await this.setState({products:res["Products"]});
        await this.setState({orders:res["Orders"]});
        
        this.setState({spinnervisibility:0});
        
    })
   }
    render(){
   
        
        return(
            <>
       
           
  

    {this.addspinner()}
    
       
           

            </>
         
        
        )
    }
    
}
export default Dashboard;
import react, { Component } from "react";
import Reactdom from "react-dom";
import { Container,Dropdown,DropdownButton, Table, Row,Modal, Col, Button, ButtonGroup, Figure, Card,Carousel, ThemeProvider,Navbar,NavDropdown,Nav,Spinner,Image} from "react-bootstrap";
import "./style.css"


import {Link} from "react-router-dom";


class Cart extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            spinnerstatus:1,
            prod:[],
            total:0
        };
        this.addspinner=this.addspinner.bind(this);
       
      
    }
    gettotal()
    {
        let x=0;
        this.state.prod.map((p)=>{
                x=x+(p.price*p.qty);
        })
        return x;
    }
    updateQuantity(incre, prod) {
        if(incre){
            // this.
        }
    }

    addspinner()
    {
        if(this.state.spinnerstatus==1)
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
                <Container fluid 
                    style={{width:"90%", marginTop:"90px"}}
                >
                    <Row>
                        <Col md={7} style={{margin:"auto 50px"}}>
                            <Row> <Col> <h3
                                style={{padding:"20px"}}
                            > My Cart </h3> </Col> </Row>
                        {/* <iframe> */}
                        <div style={{}} >
                        {this.state.prod.map((p)=>{
                            return(



                            <Row style={{color:"", padding:"30px", backgroundColor:"#F7F7F7", borderRadius:"10px", marginBottom:"20px" }}>
        
                                <Col md={3}> <Image
                                    style={{height:"100px", width:"100px", borderRadius:"10px"}}
                                className="order-sugg-image" src = {p.img_src} /> </Col>
                                <Col md={6} className="order-sugg-data">
                                    <Row> <Col> <h4 style={{fontWeight:"bolder"}}> {p.name} | {p.size} </h4>  </Col> </Row>
                                    <Row> <Col> 
                                        Size:{p.size} | Type: {p.type}
                                    </Col> </Row>
                                    <Row> <Col> 
                                        Quantity:{p.qty} | Order Frequency: {p.Orderfrequency}
                                    </Col> </Row>
                                    
                                </Col>
                                <Col md={3} 
                                    style={{textAlign:"right"}}
                                >
                                    {/* <Row> <Col> <Button variant="light"> Remove  <i class="fas fa-times"></i> </Button></Col> </Row> */}
                                    <Row> <Col><Link to={`/Dashboard/${p._id}`}> <Button variant="light"> View <i class="fas fa-eye"></i> </Button> </Link></Col> </Row>
                                    
                            
                                    {/* <i style={{cursor:"pointer"}}  onClick={async ()=>{
                                const arr=this.state.prod.filter((pro)=>{
                                    return(pro._id!==p._id)});
                                
                                    this.setState({prod:arr});
                                    
                                
                                    }}  */}
                                </Col>
                                    
                            </Row>
                            );
                        })}
                        </div>
                        {/* </iframe> */}
                        </Col>
                        <Col>
                            <h3
                            style={{padding:"20px"}}
                            > Quick Invoice </h3>
                            <Table responsive>
                            <thead>
                                <tr>
                                    <th> Product </th>
                                    <th> Quantity </th>
                                    <th> Amount </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.prod.map((p) => {
                                    return(
                                        <tr>
                                            <td> {p.name} </td>
                                            <td> {p.qty} </td>
                                            <td> {p.price} </td>
                                        </tr>

                                    );
                                })}
                                <tr>
                                    <th colSpan="2"> Sub total </th>
                                    <th> {this.gettotal()} </th>
                                </tr>
                                <tr>
                                    <th colSpan="2"> Discount applied for 10% </th>
                                    <th style={{color:"red"}}>{Math.floor(this.gettotal()*0.1)}</th>
                                </tr>
                                <tr>
                                    <th colSpan="2"> Total </th>
                                    <th> {this.gettotal() - this.gettotal()*0.1} </th>
                                </tr>
                            </tbody>
                                
                            </Table>
                            <Row><Col>
                                {/* <form action="https://bayeridl-backend.herokuapp.com/create-checkout-session" method="POST"> */}
                                    <Button onClick={async ()=>{
                                        var q=(this.gettotal() - this.gettotal()*0.1)*100;
                                        var key={"total":q};
                                          fetch('https://bayeridl-backend.herokuapp.com/create-checkout-session',{
                                            method: 'POST',
                                            headers: {
                                                'Content-Type' : 'application/json'
                                            },
                                            body:JSON.stringify(key)
                                        }).then((res)=>{
                                            return res.json();
                                        }).then((res)=>{
                                            window.location.href=res['url'];
                                        })
                                    }}
                                        variant="light"
                                        style={{backgroundColor:"#0B4619", color:"white"}}
                                    type="submit">Proceed to Payment </Button> 
                                {/* </form> */}
                            </Col></Row>
                        </Col>
                        
                    </Row>


                </Container>
                {/* <form action="https://bayeridl-backend.herokuapp.com/create-checkout-session" method="POST">
                <Button type="submit">Checkout </Button> 
                </form> */}
               


               </>
            );
        }
    }


    componentDidMount()
    {
        fetch('https://bayeridl-backend.herokuapp.com/cartpage',{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then((res)=>{
        if(res.ok)
        return res.json();
    }).then((res)=>{
         this.setState({prod:res});
        this.setState({spinnerstatus:0})
        
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
export default Cart;
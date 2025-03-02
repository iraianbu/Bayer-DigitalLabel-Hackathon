import React, {Component} from 'react';
import {Row, Col, Container, Button, Card, Image, Modal,Spinner} from 'react-bootstrap';
import products from "./products";
import StepProgressBar from "./StepProgressBar";
import QrReader from 'react-qr-reader'
const sha256=require("sha256");

class Trackproduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            prod:{},
            status:0,
            spinnerstatus:1,
            hashvalue:""
           
        }
      this.addcomponent=this.addcomponent.bind(this);
    }
  
      componentDidMount()
      {
            const key={id:this.props.id}
            console.log(key);
            fetch('https://bayeridl-backend.herokuapp.com/products',{
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
            console.log(this.state.prod);
            await this.setState({status:res["current_stage"]})
          
           
           await this.setState({spinnerstatus:0});
            
        })
      }
      addcomponent()
      {
          if(this.state.spinnerstatus===1)
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
            <Container fluid style={{marginTop:"100px", fontWeight:"bolder", marginBottom:"30px", width:"80%"}}>
            <h3> Authenticity </h3>
            
            <Row style={{marginTop:"30px"}}>
            <Col md={3}>
            <h3> Product Info </h3>
            <Card 
            style={{PaddingLeft:"30px"}}
            >
                
                <Card.Img 
                    style={{height:"200px", width:"200px", margin:"auto"}}
                src={this.state.prod.img_src} />
                <Card.Body style={{marginLeft:"20px"}}>
                <Card.Title> <strong> {this.state.prod.name} </strong></Card.Title>
                <Card.Text> {this.state.prod.type} | {this.state.prod.size} </Card.Text>
                <p> Cost: {this.state.prod.price} </p>
                {/* <Row className="store-product-price-row">
                    <Col style={{}}>
                        
                        <p style={{color:"#116530", fontSize:"20px", fontWeight:"bolder"}}>
                        <span style={{padding:"20px"}}>  ₹ </span>
                                {prod.price}</p>
                    </Col>
                </Row> */}
                </Card.Body>
            </Card>
            </Col>
            <Col md={8} style={{marginLeft:"50px"}}>
                {/* <h3> Product Authentication </h3> */}
                <p> 
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVW7B2zWVfswK8JFPnjZQhGKZT_Ev1DcJxGA&usqp=CAU"
                        style={{height:"40px", widht:"40px"}}
                    /> <span> Product Verified as Original  </span>

                </p>
                <h3> Track your Product </h3>
                <Row style={{marginTop:"30px", marginLeft:"30px"}}> <Col >
                <StepProgressBar status={this.state.status} />
                </Col> </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col md={3} style={{textAlign:"center"}}>
                        <h5> Bayer Factory </h5>
                        <p> 28 Aug, 21. 9.22 </p>
                        <Button onClick={()=>{
                            if(this.state.status>=0)
                            {
                                var z=this.state.prod._id;
                                var d=sha256(z);
                                this.setState({hashvalue:d});
                            }
                          
                        }} variant="outline-success">View Hash</Button>
                       
                    </Col>
                    <Col md={3} style={{textAlign:"center"}}>
                        <h5> Bayer Distributor </h5>
                        <p> 28 Aug, 21. 9.22 </p>
                        <Button  onClick={()=>{
                            if(this.state.status>=33)
                            {
                                var z=this.state.prod._id.toString()+"rmhfse";
                                var d=sha256(z);
                                
                                this.setState({hashvalue:d});
                            }
                            else{
                                this.setState({hashvalue:"Hasn't reached Distributor"});
                            }
                        }} variant="outline-success">View Hash</Button>
                      
                    </Col>
                    <Col md={3} style={{textAlign:"center"}} >
                        <h5> Bayer Supplier </h5>
                        <p> 28 Aug, 21. 9.22 </p>
                        <Button  onClick={()=>{
                            if(this.state.status>=66)
                            {
                                var z=this.state.prod._id.toString()+"qshwfe";
                                var d=sha256(z);
                                
                                this.setState({hashvalue:d});
                            }
                            else{
                                this.setState({hashvalue:"Hasn't reached Supplier"});
                            }
                        }} variant="outline-success">View Hash</Button>
                       
                    </Col>
                    <Col md={3} style={{textAlign:"center"}}>
                        <h5> You </h5>
                        <p> 28 Aug, 21. 9.22 </p>
                        <Button  onClick={()=>{
                            if(this.state.status>=100)
                            {
                                var z=this.state.prod._id.toString()+"bhmknk";
                                var d=sha256(z);
                                
                                this.setState({hashvalue:d});
                            }
                            else{
                                this.setState({hashvalue:"Hasn't been Delivered"});
                            }
                        }} variant="outline-success">View Hash</Button>
                       
                    </Col>

                </Row>
                <h3 className="mt-5">Transaction Hash</h3>
                <p >{this.state.hashvalue}</p>
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

export default Trackproduct;
import React, {Component} from 'react';
import {Row, Col, Container, Button, Card, Image, Modal} from 'react-bootstrap';
import products from "./products";
import StepProgressBar from "./StepProgressBar";
import QrReader from 'react-qr-reader'
const sha256=require("sha256");

class Authenticity extends Component{
    constructor(props){
        super(props);
        this.state = {
            prod:{},
            b:0,
            setShow:false,
            result: 'No result',
            c:0,
            status:0,
            hashvalue:""
        }
        this.addcomponent=this.addcomponent.bind(this);
    }
    handleScan = data => {
        if (data) {
          this.setState({result: data })
          this.setState({setShow:false});
          var key={id:parseInt(this.state.result)};
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
            this.setState({c:1});
            this.setState({prod:res});
            this.setState({status:res["current_stage"]});
          
      })
    
    
      }
    
      }
    handleError = errr => {
        console.error(errr)
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
                 <QrReader
                    delay={10}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ marginLeft:"30px" },{width:"300px"}}
                    />
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
    addcomponent()
    {
        if(this.state.c==1)
        {
            return(
                <Container>
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
        else{
            return(
                <Container style={{marginTop:"30px"}}>
                    <h5 style={{textAlign:"justify"}}>&nbsp; &nbsp; &nbsp; &nbsp;  <span style={{fontWeight:"bolder", fontSize:"25px"}}> T</span>his page enables you to track the authenticity of any given Bayer product, powered entirely by permissioned blockchain technology.  This enables us to make the entire supply chain process of the product transparent, and ensure complete visibility. This helps us know the provenance of each and every product, and ensure that there are no counterfeit products infiltrating the supply chain.
                    </h5>
                    <Row style={{margin:"40px auto", textAlign:"center", backgroundColor:"#F4F4F4", padding:"50px", borderRadius:"10px"}}>
                        <Col md={4}>
                            <span style={{color:"#0B4619"}}> <i class="fas fa-truck fa-3x"></i> </span>
                            <span style={{marginLeft:"10px"}}> Complex Supply Chain Visibility </span>
                        </Col>
                        <Col md={4}>
                            <span style={{color:"#0B4619"}}><i class="fas fa-percent fa-3x"></i> </span>
                            <span style={{marginLeft:"10px"}}> 100% Authentic </span>
                        </Col>
                        <Col md={4}>
                            <span style={{color:"#0B4619"}}> <i class="fas fa-qrcode fa-3x"></i> </span>
                            <span style={{marginLeft:"10px"}}> Powered by QR codes </span>
                        </Col>


                    </Row>                        

                </Container>

            )
        }
    }
    render(){
        return(
            <>
            {this.addqr()}
            <Container fluid style={{marginTop:"100px", fontWeight:"bolder", marginBottom:"30px", width:"80%"}}>
                <h3> Authenticity </h3>
                <Row>
                    <Col md={4}>
                        <h5> Scan QR code for Authentication </h5>
                    </Col>
                    <Col md={2}>
                        <Button 
                        onClick={async()=>{
                            await this.setState({b:1});
                            await this.setState({setShow:true});
                        }}
                        variant="light">
                            Scan QR
                        </Button>
                    </Col>
                </Row>
                {this.addcomponent()}

            </Container>

            </>

        )
    }
}

export default Authenticity;
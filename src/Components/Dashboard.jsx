import react, { Component } from "react";
import Reactdom from "react-dom";
import { Container, Row, Col, Button, Figure, Card,Carousel, ThemeProvider,Navbar,NavDropdown,Nav} from "react-bootstrap";
import "./style.css"
import products from "./products";
import QR from "./QR";
class Dashboard extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            products:products,
            b:0,
            selectedcategory:"Select Category"
        };

    }
   addqr()
   {
       if(this.state.b===1)
       {
           return (
               <div className="mt-5 mr-5" style={{paddingLeft:"10px"}}>
                   <QR/>
               </div>
           )

       }
       else
       return <div></div>

   }
    render(){
   
        
        return(
            <>
            <Container fluid  style={{padding:"0"}}>
            <Row >
            <Col md={4} className="mainpage-imagebackround" style={{backgroundColor:"#0093E9"}} >
                        <h1 className="dutytext mt-5 ml-5" style={{marginTop:"5%",padding:"20px",fontFamily:"roboto"}}>Welcome to Your One Stop Dashboard.</h1>
                                    
            </Col>
            <Col md={8} style={{marginLeft:"-15px"}}>

             <Carousel controls={false}  interval={3500} fade={true} >
                    <Carousel.Item>
                        <img
                        className="d-block w-100 cimage"
                        src="https://www.bayer.com/sites/default/files/styles/1600_620/public/2021-05/climate-1440x590.jpg?h=5c643f6f&itok=iLGNgljS"
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 cimage"
                        src="https://www.rti.org/sites/default/files/p010827_istock_8864284_2500.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 cimage"
                        src="https://www.iaea.org/sites/default/files/styles/original_image_size/public/cn-305-banner-1140x640.jpg?itok=mkXWvuMy"
                        alt="Third slide"
                        />
                    </Carousel.Item>
            </Carousel>
            </Col>

        </Row>
          
    </Container>
    <Container fluid className="mt-5 ml-3" >
        <p style={{fontFamily:"roboto",fontSize:"1.4rem"}}>Add products to dashboard by purchasing from the store or simply scan the Digital Label. </p>
        <Button onClick={async ()=>{ await this.setState({b:1})}}>Add New Product</Button>
    </Container>


    <Container fluid>
        {this.addqr()}
    </Container>


    <Container fluid className="mt-5 ml-3">
    <p style={{fontFamily:"roboto",fontSize:"1.4rem",fontWeight:"bold"}} >Your Products </p>
    </Container>


    <Container className="mt-5">
        <Row >
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
    </Container>

            <Container >
                <Row>
                    {this.state.products.filter((a)=>{
                        if(this.state.selectedcategory==="Select Category")
                        return a;
                        else{
                            if(a.type===this.state.selectedcategory)
                            return a;
                        }
                    }).map((prod)=>{
                        return(
                            <Col md={4} className="mt-3">
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={prod.img_src} style={{width:"18rem",height:"200px",objectFit:"cover"}} />
                                <Card.Body>
                                    <Card.Title>{prod.name}</Card.Title>
                                    <Card.Text>
                                {prod.info.slice(0,70)}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                            )
                    })}
                </Row>
            </Container>


            </>
         
        
        )
    }
    
}
export default Dashboard;
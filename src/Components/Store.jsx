import react, { Component } from "react";
import Reactdom from "react-dom";
import { Container, Row, Col, Button, Figure, Card,Carousel, ThemeProvider,Navbar,NavDropdown,Nav} from "react-bootstrap";
import "./style.css"


class Store extends Component{
    constructor(props)
    {
        super(props);
        this.state={
          
        };

    }
  
    render(){
   
        
        return(
            <>
              <Container fluid  style={{padding:"0"}}>
            <Row >
            <Col md={4} className="mainpage-imagebackround" style={{backgroundColor:"#0093E9"}} >
                        <h1 className="dutytext mt-5 ml-5" style={{marginTop:"5%",paddingTop:"20px",fontFamily:"roboto"}}>Bayer Digital Web Store.</h1>

                        <h1 className="dutytext  ml-5" style={{fontFamily:"roboto"}}>One Click Store</h1>
                                    
            </Col>
            <Col md={8} style={{marginLeft:"-15px"}}>

             <Carousel fade={true} controls={false}  interval={3500}  >
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
        <p style={{fontFamily:"roboto",fontSize:"1.4rem"}}>Choose a variety of crop science products to buy your crops. </p>
        
    </Container>
    <Container>
        <Row>
            <Col md={3} style={{textAlign:"center"}}>
                
                <img src="https://images.theconversation.com/files/290201/original/file-20190829-106517-191ipmu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                style={{width:"200px",height:"200px",borderRadius:"50%",marginLeft:"auto",marginRight:"auto"}} alt=""></img>
                <p>Insecticide</p>
            </Col>
            <Col md={3} style={{textAlign:"center"}}>
                <img src="https://images.squarespace-cdn.com/content/v1/583ca2f2d482e9bbbef7dad9/1497903204611-NYFUBXEK4JL4DE7OI3HW/herbicide-587589_960_720.jpg?format=2500w"
                style={{width:"200px",height:"200px",borderRadius:"50%",marginLeft:"auto",marginRight:"auto"}} alt=""></img>
                <p style={{textAlign:"center"}}>Pesticide</p>
            </Col>
            <Col md={3} style={{textAlign:"center"}}>
                <img src="https://static.scientificamerican.com/sciam/cache/file/F6C02647-4B66-41FD-978DF41814785D05_source.jpg?w=590&h=800&C29DD42D-BA0D-47AA-A578FC3D3B6AD687"
                style={{width:"200px",height:"200px",borderRadius:"50%"}} alt=""></img>
                <p style={{textAlign:"center"}}>Herbicide</p>
            </Col>
            <Col md={3} style={{textAlign:"center"}}>
                <img src="https://images.theconversation.com/files/307156/original/file-20191216-124022-r2addy.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
                style={{width:"200px",height:"200px",borderRadius:"50%"}} alt=""></img>
                <p style={{textAlign:"center"}}>Crop Seeds</p>
            </Col>
            
            
        </Row>
      

    </Container>


            </>
         
        
        )
    }
    
}
export default Store;
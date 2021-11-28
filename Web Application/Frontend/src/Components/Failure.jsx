import react, {Component} from 'react';
import { Row, Col, ListGroup, InputGroup, Form, Button, Image,  ButtonGroup, Container, FormControl, Card, Dropdown, DropdownButton } from 'react-bootstrap';

class Failure extends Component{
   
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
        // fetch('http://localhost:7000/cartlength',{
        //     method: 'GET',
        //     headers: {
        //         'Content-Type' : 'application/json'
        //     }
        // }).then((res)=>{
        //     return res.json();
        // }).then((res)=>{
        //     this.setState({cartlength:res["count"]});
        //     this.setState({products:res["arr"]});
        //     console.log(res["arr"]);
        // })

     }
    render(){
        return(
            <Container fluid style={{marginTop:"100px", width:"80%"}}>
                <Row>
                    <Col>
                        <Image src="data:image/png;base64,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"
                         style={{height:"50px", width:"50px"}} />
                        <p style={{fontSize:"30px", display:"inline", marginLeft:"30px"}}> <strong> Oops! Payment Failed </strong> </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p
                            style={{margin:"30px", width:"50%", fontSize:"20px"}}
                        > Your transaction failed. But don't worry, we still have your products in your <a href="/Cart"> cart </a> </p>

                    </Col>

                </Row>
                <Row>
                    <Col style={{marginLeft:"30px"}}>
                        <Button variant="dark">
                           Try Again
                        </Button>
                    </Col>

                </Row>
                <Row style={{margin:"30px"}}>
                    <Col>
                       <p> You will be redirected to your Checkout in <strong>{this.state.seconds}</strong> second(s)</p>
                    </Col>

                </Row>
            </Container>

        )
    }
}

export default Failure;
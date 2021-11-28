import React, { Component } from "react";
import products from "./products";
import Navbar from './Navbar';
import {  Container, Row, Col, Button, Figure, Card,Dropdown} from "react-bootstrap";
import Dashboard from "./Dashboard";
import Store from "./Store";
import { Switch, Route, Redirect } from "react-router-dom";
import Productdetail from "./Productdetail";
import Digitalwallet from "./DigitalWallet";
import Cart from "./Cart";
import Support from "./Support";
import Authenticity from "./Authenticity";
import Trackproduct from "./Trackproduct";
import Success from "./Success";
import Failure from "./Failure";
import Error from "./Error";
class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products:products
      };
    
    }
    componentDidMount()
    {
     fetch('http://localhost:7000/',{
         method: 'GET',
         headers: {
             'Content-Type' : 'application/json'
         }
     }).then((res)=>{
         if(res.ok)
         return res.json();
     }).then(async(res)=>{
        
         await this.setState({products:res});
        
         
     })
    }
   
  
    render() {
     
      return (
        <div>
          
  
          <Switch>
          <Route
                exact
              path="/"
              component={() => {
                return <Dashboard />;
              }}
            />
            <Route
                exact
              path="/Dashboard"
              component={() => {
                return <Dashboard />;
              }}
            />
            <Route
            path="/Dashboard/:productid"
            component={({match})=>{  return <Productdetail id= {parseInt(match.params.productid,10)}/> }}
            />
             <Route
            path="/Authenticity/:productid"
            component={({match})=>{  return <Trackproduct id= {parseInt(match.params.productid,10)}/> }}
            />
            <Route
              exact
              path="/Store"
              component={() => {
                return <Store />;
              }}
            />
              <Route
              exact
              path="/Support"
              component={() => {
                return <Support />;
              }}
            />
            <Route
              exact
              path="/Cart"
              component={() => {
                return <Cart />;
              }}
            />
            <Route
              exact
              path="/Authenticity"
              component={() => {
                return <Authenticity />;
              }}
            />
            <Route
              exact
              path="/Success"
              component={() => {
                return <Success />;
              }}
            />
            <Route
              exact
              path="/Failure"
              component={() => {
                return <Failure />;
              }}
            />
            <Route
              exact
              path="/Error"
              component={() => {
                return <Error />;
              }}
            />
            <Redirect to="/Error" />
          </Switch>
         
        </div>
      );
    }
  }
  
  export default Main;
  
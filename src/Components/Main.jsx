import React, { Component } from "react";


import Navbar from './Navbar';
import {  Container, Row, Col, Button, Figure, Card,Dropdown} from "react-bootstrap";
import Dashboard from "./Dashboard";
import Store from "./Store";
import { Switch, Route, Redirect } from "react-router-dom";


class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    
    }
  
   
  
    render() {
      return (
        <div>
          
  
          <Switch>
            <Route
                exact
              path="/Dashboard"
              component={() => {
                return <Dashboard />;
              }}
            />
            <Route
              exact
              path="/Store"
              component={() => {
                return <Store />;
              }}
            />
            
            <Redirect to="/Dashboard" />
          </Switch>
         
        </div>
      );
    }
  }
  
  export default Main;
  
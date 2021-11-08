import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class QR extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      result: 'No result'
    }

  }
 
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

 
  render() {
    return (
      <div>
        <QrReader
          delay={100}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ marginLeft:"30px" },{width:"20%"}}
         
        />
        
       
      </div>
    )
  }
}
export default QR;
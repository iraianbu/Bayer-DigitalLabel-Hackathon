import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class QR extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      result: 'No result',
     
    }

  }
 
 
  handleScan = data => {
    if (data) {
      this.setState({result: data })
        


  }

  }
  handleError = errr => {
    console.error(errr)
  }

 
  render() {
    return (
      <div>
        <QrReader
          delay={10}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ marginLeft:"30px" },{width:"300px"}}
         
        />
        
       
      </div>
    )
  }
}
export default QR;
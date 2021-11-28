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
     
        var key={id:parseInt(this.state.result)};
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
      var url="http://bayeridl.herokuapp.com/Dashboard/"+parseInt(this.state.result);
      window.location.href=url;
      var key={prod:res}
      fetch('https://bayeridl-backend.herokuapp.com/qr',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(key)
    })
        
    })


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
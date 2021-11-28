import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {Button} from 'react-bootstrap';
class FileDrop extends Component {
  constructor() {
    super();
    this.onDrop = async(files) => {
         
         await this.setState({files})
         console.log("uploaded");
    };
    this.state = {
      files: []
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
        <>
      <Dropzone onDrop={this.onDrop}  accept="image/png, image/gif"  >
        {({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <h3 style={{paddingTop:"50px", textAlign:"center", paddingBottom:"50px", color:"black", backgroundColor:"#F4F4F4", border:"none"}}>
              {!isDragActive && 'Click here or drop a file to upload!'}
                {isDragActive && !isDragReject && "Drop it!"}
                {isDragReject && "File type not accepted, sorry!"}



              </h3>
            </div>
            <aside>
              
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
      
        </>
    );
  }
}

export default FileDrop;
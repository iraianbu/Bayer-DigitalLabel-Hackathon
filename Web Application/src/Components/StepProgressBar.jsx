import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
 
class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={this.props.status}
        width="90%"
        filledBackground="green"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            // <div style={{color:"green", height:"30px", width:"30%", borderRadius:"50%"}}> </div>
            <img
              style={{borderRadius:"50%"}}
              width="30px" height="30px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEUAhUJ5XHFoAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            // <div style={{color:"green", height:"30px", width:"30%", borderRadius:"50%"}}> </div>
            <img
              style={{borderRadius:"50%"}}
              width="30px" height="30px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEUAhUJ5XHFoAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            // <div style={{color:"green", height:"30px", width:"30%", borderRadius:"50%"}}> </div>
            <img
              style={{borderRadius:"50%"}}
              width="30px" height="30px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEUAhUJ5XHFoAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            // <div style={{color:"green", height:"30px", width:"30%", borderRadius:"50%"}}> </div>
            <img
              style={{borderRadius:"50%"}}
              width="30px" height="30px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEUAhUJ5XHFoAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="
            />
          )}
        </Step>
      </ProgressBar>
    );
  }
}

export default StepProgressBar;
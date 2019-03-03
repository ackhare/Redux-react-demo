
import React, {Component} from "react";
import InputFoo from './components/InputFoo'
class App extends React.Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: ''
    };
  }
  
  handleData(data) {
    this.setState({
      fromChild: data
    });
  }
  
  render() {
    return (
      <div>
        <InputFoo handlerFromParant={this.handleData} /> 
        <h5>Received by parent:<br />{this.state.fromChild}</h5>
      </div>
    );
  }
}


export default App;

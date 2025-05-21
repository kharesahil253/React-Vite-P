import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    console.log(props);
    super();
    this.state={
        count:0
    };
  }
  render() {
    return (
      <>
        <h1>Hello</h1>
        <h2>Name : {this.props.name}</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={()=> this.setState({count: this.state.count +1})}>Increase</button>
         <button onClick={()=>this.setState({count: this.state.count -1})}>Decrease</button>
         <button onClick={()=>this.setState({count: this.state.count = 0})}>Reset</button>
      </>
    );
  }
}

export default ClassComponent;

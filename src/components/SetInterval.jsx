import { Component } from "react";

class SetInterval extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prev) => ({
        count: prev.count + 1,
      }));
    }, 1000);
  }
  componentDidUpdate() {
    console.log(this.state.count);
  }
  componentWillUnmount(){
    console.log("componentWill is called")
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h1>Timer : {this.state.count}</h1>
      </div>
    );
  }
}
export default SetInterval;

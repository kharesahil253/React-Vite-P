import { Component } from "react";
import SetInterval from "./SetInterval";

export class Githubprofile extends Component {
  constructor() {
    super();

    this.state = {
      userdata: null,
      showTimer: false,
    };
    console.log("constructor is called");
  }
  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/kharesahil253");
    const data = await res.json();
    this.setState({ userdata: data });
    console.log("componentDidMount is called");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  toggleTimer =()=>{
    this.setState(prev =>({
      showTimer: !prev.showTimer
    }))
  }
  render() {
    console.log("render is called");
    if (!this.state.userdata) return <h1>Loading</h1>;
    const { name, avatar_url, bio } = this.state.userdata;
    return (
      <>
        <div>
          <img src={avatar_url} alt="" />
          <h3>Name : {name}</h3>
          <h3>bio : {bio}</h3>
          <button onClick={this.toggleTimer}>{this.state.showTimer ? "Show Time" : "Hide Time"}</button>
        </div>
        <div>
            {this.state.showTimer && <SetInterval />}
        </div>
      </>
    );
  }
}

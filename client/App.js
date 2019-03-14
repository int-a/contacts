import React, { Component } from "react";
//import "../styles.css";
require("@babel/polyfill");

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  async callBackendAPI() {
    const response = await fetch('/sampleData');
    const body = await response.text();

    if(response.status !== 200) {
      throw Error(body)
    }
    return body;
  }

  render() {
    let data = this.state.data || 'there is no data';

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{data}</p>
      </div>
    );
  }
}

export default (App);
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
    const response = await fetch('/api/contacts');
    const body = await response.json();

    if(response.status !== 200) {
      //test this explicitly, have endpoint return error code
      throw Error(body.error)
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
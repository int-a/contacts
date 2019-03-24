import React, { Component } from "react";
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import AddContactModal from './AddContactModal';
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
    return (
      <div>
        <ContactList />
        <ContactDetail />
        <AddContactModal />
      </div>
    );
  }
}

export default (App);
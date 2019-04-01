import React, { Component } from 'react';
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import AddContactModal from './AddContactModal';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  // componentDidMount() {
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res }))
  //     .catch(err => console.log(err));
  // }

  // callBackendAPI() {
  componentDidMount() { 
    // TODO: pull this code out and into its own api or server file
    // probably just return the result of fetch (a promise) and deal
    // with it asyncronously here

    fetch('/api/contacts').then((data) => {
      console.log(data);
      return data.json();
    }).then((body) => {
      console.log("logging body");
      console.log(body);
      this.setState({data: body})
    }).catch(err => console.log(err));

    //const body = await response.json();

    // if(response.status !== 200) {
    //   //test this explicitly, have endpoint return error code
    //   throw Error(body.error)
    // }
    // return body;
  }

  render() {
    console.log('logging the states');
    console.log(this.state.data);
    return (
      <div>
        <ContactList />
        <ContactDetail />
        <AddContactModal />
      </div>
    );
  }
}

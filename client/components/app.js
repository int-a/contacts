import React, { Component } from 'react';
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import AddContactModal from './AddContactModal';
import { getContacts } from '../server/api';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() { 
    getContacts().then((body) => {
      console.log("logging body");
      console.log(body);
      this.setState({data: body})
    }).catch(err => console.log(err));
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

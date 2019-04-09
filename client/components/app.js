import React, { Component } from 'react';
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import AddContactModal from './AddContactModal';
import { callBackendAPI } from '../server/server';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
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

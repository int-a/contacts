import React, { Component } from 'react';
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import AddContactModal from './AddContactModal';
import '../styles.css';

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
        <ContactList className="contactList" />
        <ContactDetail />
        <AddContactModal />
      </div>
    );
  }
}
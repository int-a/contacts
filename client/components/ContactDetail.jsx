import React, { Component } from 'react';
import { connect } from 'react-redux';
import removeContact from '../actions/action_remove_contact';
import RemoveContactButton from './RemoveContactButton';
import { bindActionCreators } from 'redux'

class ContactDetail extends Component {

  removeContact() {
    this.props.removeContact({"firstName": this.props.contact.firstName, "lastName": this.props.contact.lastName, "phone": this.props.contact.phone});
  }

  render() {
    if (!this.props.contact) {
      return (
        <div>Select a contact from the list to see its details</div>
      );
    } 
    return (
      <div>
        <h3>Contact Details for: { this.props.contact.name }</h3>
        <div>Phone: { this.props.contact.phone }</div>
        <RemoveContactButton onClick={() => this.removeContact()}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.activeContact
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeContact: removeContact }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);
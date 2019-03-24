import React, { Component } from 'react';
import AddContactButton from './AddContactButton';
import { connect } from 'react-redux';
import addContact from '../actions/action_add_contact';
import { bindActionCreators } from 'redux';

class AddContactModal extends Component {

  constructor() {
    super();
    //this.state = {firstName: "", phone: ""};
    //const { dispatch } = props;
  }

  handleNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  
  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  addContact() {
    this.props.addContact({"name": this.state.firstName, "phone": this.state.phone});
  }

  render() {

    return(
      <div>
        <input type="text" className="name" placeholder="Contact Name" onChange={(event) => this.handleNameChange(event)}/>
        <input type="text" className="phone" placeholder="Contact Phone" onChange={(event) => this.handlePhoneChange(event)}/>
        <AddContactButton onClick={() => this.addContact()}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapstatetoprops:');
  console.log(state);
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addContact: addContact }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContactModal)
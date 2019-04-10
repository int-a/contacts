import React, { Component } from 'react'

export default class AddContactButton extends Component {
  render() {
    return(
      <button type="submit" onClick={this.props.onClick}>Add Contact</button>
    )
  }
}
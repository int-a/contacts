import React, { Component } from 'react'

export default class RemoveContactButton extends Component {
  render() {
    return(
      <button type="submit" onClick={this.props.onClick}>Remove Contact</button>
    )
  }
}
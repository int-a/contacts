function removeContact(contact) {
  return {
    type: 'REMOVE_CONTACT',
    payload: contact
  }
}

export default removeContact;
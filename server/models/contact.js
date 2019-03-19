const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'A first name is required']
  },
  lastName: {
    type: String,
    required: [true, 'A last name is required']
  },
  number: {
    type: String,
    required: [true, 'A phone number is required']
  }
});

//create model
const Contact = mongoose.model('contacts', ContactSchema);

module.exports = Contact;  
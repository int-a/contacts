import remove from 'lodash';

export default function (state = { contacts : [] }, action) {
  console.log('Logging the state');
  console.log(state);

  switch (action.type) {
    case 'ADD_CONTACT':
      console.log(state);
      return state.concat([
        {
          _id: action.payload._id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          phone: action.payload.phone
        }
    ])
    case 'REMOVE_CONTACT':
      let returnVal = state.filter(function(value, index, arr){
        return (value.firstName !== action.payload.firstName && value.lastName !== action.payload.lastName && value.phone !== action.payload.phone);
      });
      return returnVal;
    default:
      return state;
  }
}
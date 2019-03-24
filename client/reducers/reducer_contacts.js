import remove from 'lodash';

export default function (state = { contacts : [] }, action) {
  console.log('Logging the state');
  console.log(state);

  switch (action.type) {
    case 'ADD_CONTACT':
      console.log(state);
      return state.concat([
        {
          name: action.payload.name,
          phone: action.payload.phone
        }
    ])
    case 'REMOVE_CONTACT':
      let returnVal = state.filter(function(value, index, arr){
        return (value.name !== action.payload.name && value.phone !== action.payload.phone);
      });
      return returnVal;
    default:
      return state;
  }
}
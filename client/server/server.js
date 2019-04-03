export default async function callBackendAPI() {
    console.log('it got here');
    
    const response = await fetch('/api/contacts');
    const body = await response.json();
    console.log(body);
    console.log('it should have logged the boddy');

    if(response.status !== 200) {
      //test this explicitly, have endpoint return error code
      throw Error(body.error)
    }
    return body;
  }
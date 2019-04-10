export function getContacts() {
  let response = fetch('/api/contacts').then((response) => {
    if(!response.ok) {
      throw new Error("Error getting data from DB");
    }
    console.log(response);
    return response.json();
  }).catch(err => console.log(err));

  return response;
}
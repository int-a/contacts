export function getContacts() {
  let data = fetch('/api/contacts').then((data) => {
    console.log(data);
    return data.json();
  }).catch(err => console.log(err));

  return data;
}